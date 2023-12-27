import React, { useEffect } from "react";
import netflixLogo from "../images/netflixLogo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase.js";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({ displayName: user.displayName, email: user.email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div className="w-full absolute z-10 bg-gradient-to-b from-black to-white-500 flex justify-between z-30">
      <img className="w-48 " src={netflixLogo} alt="netflix-logo" />
      {user && (
        <div className="flex">
          <h3 className="m-2 mt-6 font-bold text-lg text-white ">
            Welcome {user?.displayName}
          </h3>
          <button
            onClick={handleSignOut}
            className="bg-red-500 w-24 text-white p-2 m-4 h-10 rounded-md font-semibold cursor-pointer text-center"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;

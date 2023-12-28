import React, { useEffect } from "react";
import netflixLogo from "../images/netflixLogo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase.js";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { showGptPage } from "../utils/gptSlice.js";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const isGptPage = useSelector((store) => store.gpt.isGptPage);

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

  const handleGptSearch = () => {
    dispatch(showGptPage());
  };

  return (
    <div className="w-full absolute z-10 bg-gradient-to-b from-black to-white-500 flex flex-col md:flex-row justify-between z-30">
      <img
        className="w-48 mx-auto md:mx-0"
        src={netflixLogo}
        alt="netflix-logo"
      />
      {user && (
        <div className="flex mx-auto md:mx-0 -mt-[5%] md:mt-[0%]">
          <h3 className="hidden md:block m-2 mt-6 font-bold text-lg text-white ">
            Welcome {user?.displayName}
          </h3>
          <button
            onClick={handleGptSearch}
            className="bg-purple-500 w-24 py-2 my-5 mx-2 rounded-md text-white font-semibold cursor-pointer "
          >
            {isGptPage ? " homepage " : "GPT Search"}
          </button>
          <button
            onClick={handleSignOut}
            className="bg-red-500 w-24 text-white p-2 my-5 mx-2 h-10 rounded-md font-semibold cursor-pointer text-center"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;

import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import netflixBackground from "../images/netflix-background.png";
import { regexValidate } from "../utils/regexvalidators";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

function Login() {
  const [signIn, setSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setSignIn(!signIn);
    setErrorMsg("");
  };

  const handleSubmit = () => {
    let errorMsg = regexValidate({
      email: email.current.value,
      password: password.current.value,
    });
    setErrorMsg(errorMsg);
    if (!signIn && name.current.value === "") setErrorMsg("Enter valid name.");
    if (!signIn && name.current.value !== "" && !errorMsg) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    }
    if (signIn && !errorMsg) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    }
  };

  return (
    <>
      <Header />

      <div className="absolute">
        <img
          className=" h-screen w-screen object-cover"
          src={netflixBackground}
          alt="netflix-logo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-4/12 md:h-9/12 absolute bg-black  p-12 rounded-sm my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-3 ">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 my-4 w-full bg-gray-700 rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2 my-4 w-full bg-gray-700 rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700 rounded-sm"
        />
        <button
          className=" bg-red-700 text-xl rounded-md p-2 my-6 w-full"
          onClick={handleSubmit}
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 my-2 text-sm text-red-400">{errorMsg}</p>
        <p
          className="text-sm font-bold p-2 my-2 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {signIn ? "New to Netflix ? Sign Up Now" : "Existing User ? Sign In"}
        </p>
      </form>
    </>
  );
}

export default Login;

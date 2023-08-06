import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const LogIn = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/");
  };

  const signOutUser = async () => {
    await signOut(auth);
  };

  return (
    <div className="d-flex ">
      <img
        src={user?.photoURL || "./src/assets/images/no_profile_pic.png"}
        alt=""
        width="40"
        height="40"
        className="rounded-circle"
      />
      <button
        className="btn btn-outline-success"
        type="submit"
        //onClick={signInWithGoogle}
        onClick={user ? signOutUser : signInWithGoogle}
      >
        {user ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default LogIn;

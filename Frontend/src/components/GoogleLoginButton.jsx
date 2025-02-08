import React from "react";
import { account } from "../utils/appwrite";

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    const redirectUrl = `${window.location.origin}/auth/callback`; // Adjust if needed
    account.createOAuth2Session("google", redirectUrl, redirectUrl);
  };

  return (
    <button onClick={handleGoogleLogin} className="btn btn-primary">
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;

import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/google-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ credential: credentialResponse.credential }),
      });

      const data = await response.json();
      
      if (response.ok) {
        await loginUser(data.user);
        navigate('/', { replace: true });
      } else {
        console.error('Google login failed:', data);
        alert('Failed to login with Google. Please try again.');
      }
    } catch (err) {
      console.error('Google login error:', err);
      alert('An error occurred during Google login. Please try again.');
    }
  };

  const handleError = () => {
    console.error('Google Sign-In Failed');
    alert('Google Sign-In failed. Please try again or use another login method.');
  };

  return (
    <GoogleLogin
      onSuccess={handleGoogleSuccess}
      onError={handleError}
      useOneTap={false}
      flow="implicit"
      auto_select={false}
      type="standard"
      theme="filled_blue"
      size="large"
      text="signin_with"
      shape="rectangular"
      width="250"
      locale="en"
    />
  );
};

export default GoogleLoginButton;

// Welcome.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendEmailVerification, reload } from "firebase/auth";
import { auth } from "./firebaseConfig";

const Welcome = () => {
  const [verificationSent, setVerificationSent] = useState(false);
  const [error, setError] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(
    auth.currentUser.emailVerified
  );

  const handleSendVerificationEmail = async () => {
    setError("");
    try {
      await sendEmailVerification(auth.currentUser);
      setVerificationSent(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCheckVerificationStatus = async () => {
    await reload(auth.currentUser);
    setIsEmailVerified(auth.currentUser.emailVerified);
  };

  return (
    <div className="welcome-container">
      <h2>Welcome to Expense Tracker</h2>
      <div className="profile-incomplete">
        <p>Profile is incomplete</p>
        <Link to="/profile">
          <button>Complete Profile</button>
        </Link>
      </div>
      {!isEmailVerified && (
        <div className="verify-email">
          <button onClick={handleSendVerificationEmail}>Verify Email</button>
          {verificationSent && (
            <p>A verification email has been sent. Please check your inbox.</p>
          )}
          <button onClick={handleCheckVerificationStatus}>
            Check Verification Status
          </button>
          {error && <p className="error">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Welcome;

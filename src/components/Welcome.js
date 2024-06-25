// Welcome.js
import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h2>Welcome to Expense Tracker</h2>
      <div className="profile-incomplete">
        <p>Profile is incomplete</p>
        <Link to="/profile">
          <button>Complete Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;

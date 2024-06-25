// Profile.js
import React, { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "./firebaseConfig";

const Profile = () => {
  const [profilePhoto, setProfilePhoto] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const user = auth.currentUser;
      if (user) {
        await updateProfile(user, { photoURL: profilePhoto });
        setSuccess("Profile updated successfully");
      } else {
        setError("No user is currently signed in");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCancel = () => {
    setProfilePhoto("");
    setPhotoURL("");
  };

  return (
    <div className="profile-container">
      <h2>Complete Your Profile</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Profile Photo URL:
          <input
            type="text"
            value={profilePhoto}
            onChange={(e) => setProfilePhoto(e.target.value)}
            required
          />
        </label>
        {profilePhoto && (
          <img
            src={profilePhoto}
            alt="Profile"
            style={{ width: "100px", height: "100px", marginTop: "10px" }}
          />
        )}
        <div className="profile-buttons">
          <button type="submit">Update</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default Profile;

// Profile.js
import React, { useState, useEffect } from "react";
import { updateProfile } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

const Profile = () => {
  const [profilePhoto, setProfilePhoto] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchProfileData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setProfilePhoto(data.photoURL || "");
        }
      }
    };

    fetchProfileData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const user = auth.currentUser;
      if (user) {
        await updateProfile(user, { photoURL: profilePhoto });
        const docRef = doc(db, "users", user.uid);
        await setDoc(docRef, { photoURL: profilePhoto }, { merge: true });
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

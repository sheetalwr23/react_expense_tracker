import React from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.ui.notification);

  if (!notification) return null;

  return (
    <div className={`notification ${notification.status}`}>
      <h2>{notification.title}</h2>
      <p>{notification.message}</p>
    </div>
  );
};

export default Notification;

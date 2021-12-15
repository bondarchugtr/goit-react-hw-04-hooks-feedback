import React from "react";
import PropTypes from "prop-types";
import s from "./Notification.module.css";
// import s from "./Feedback.module.css";

const Notification = ({ message = "" }) => {
  return <>{message && <span className={s.Notification}>{message}</span>}</>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;

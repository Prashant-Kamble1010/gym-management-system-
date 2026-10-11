import React, { useEffect } from "react";
import { CheckCircleIcon, AlertCircleIcon, XIcon } from "./Icons";
import "./Toast.css";

export default function Toast({ message, type = "info", onClose, duration = 4000 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className={`gym-toast gym-toast-${type}`}>
      <div className="gym-toast-icon">
        {type === "success" ? (
          <CheckCircleIcon size={20} />
        ) : (
          <AlertCircleIcon size={20} />
        )}
      </div>
      <div className="gym-toast-content">
        <p className="gym-toast-message">{message}</p>
      </div>
      <button className="gym-toast-close" onClick={onClose} aria-label="Close notification">
        <XIcon size={16} />
      </button>
      <div className="gym-toast-progress" style={{ animationDuration: `${duration}ms` }}></div>
    </div>
  );
}

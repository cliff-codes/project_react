
import { useState, useEffect } from "react";

function NotificationAlert({ bgColor }) {
  const [showAlert, setShowAlert] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false); // Start hiding the alert
      setTimeout(() => setIsVisible(false), 1000); // Delay unmounting for animation
    }, 3000);

    return () => clearTimeout(timer); // Cleanup to prevent memory leaks
  }, []);

  if (!isVisible) return null; // Completely remove from DOM after fade-out

  return (
    <div
      className={`min-w-[300px] max-w-[500px] px-4 py-2 ${
        bgColor || "bg-slate-500"
      } rounded-md transition-opacity duration-500 ${showAlert ? "opacity-100" : "opacity-0"}`}
    >
      NotificationAlert
    </div>
  );
}

export default NotificationAlert;

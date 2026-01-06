import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { toast } from "sonner";

const LogOutButton = () => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        window.location.href = "/"; // or use React Router's useNavigate
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <button style={{width : "80%", margin : "24px"}} className="bg-red-600 text-white px-3 py-1.5" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogOutButton;

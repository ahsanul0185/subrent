// PrivateRoute.jsx
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { Loader } from "lucide-react";
import { auth } from "../firebase/firebase";

export default function PrivateRoute({ children }) {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      setUser(u);
      setChecking(false);
    });
  }, []);

  if (checking) {
    return (
      <div className="h-screen w-full grid place-items-center">
        <Loader className="animate-spin size-10" />
      </div>
    );
  }

  return user ? children : <Navigate to="/admin" />;
}

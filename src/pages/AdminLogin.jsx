// // Login.jsx
// import { useEffect, useState } from "react";
// import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
// import { toast } from "sonner";
// import { auth } from "../firebase/firebase";
// import { Navigate } from "react-router-dom";
// import { Loader } from "lucide-react";

// const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const [user, setUser] = useState(null);
//   const [checking, setChecking] = useState(true);

//   const login = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       await signInWithEmailAndPassword(auth, email, password);
//       // Redirect to dashboard
//       window.location.href = "/dashboard";

//       toast.error("Login successful");
//     } catch (err) {
//       console.log(err);
//       toast.error("Invalid credentials");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     onAuthStateChanged(auth, (u) => {
//       setUser(u);
//       setChecking(false);
//     });
//   }, []);

//   if (checking) {
//     return (
//       <div className="h-screen w-full grid place-items-center">
//         <Loader className="animate-spin size-10" />
//       </div>
//     );
//   }

//   if (user) {
//     return <Navigate to="/dashboard" />;
//   }

//   return (
//     <div className="admin-login-form-wrapper">
//       <form className="admin-login-form" onSubmit={login}>
//         <h1>Admin Login</h1>
//         <input
//           className="admin-login-input"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           type="email"
//           required
//         />
//         <input
//           className="admin-login-input"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           type="password"
//           placeholder="Password"
//           required
//         />
//         <button className="admin-login-button" type="submit" disabled={loading}>
//           {loading ? "Logging..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;

import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "sonner";
import { auth } from "../firebase/firebase";
import { Navigate } from "react-router-dom";
import { Loader } from "lucide-react";
import logo from "/logo-1.jpeg"; // Update path to your logo
import Button from "../components/Button";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  const login = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/dashboard";
      toast.success("Login successful");
    } catch (err) {
      console.log(err);
      toast.error("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      setUser(u);
      setChecking(false);
    });
  }, []);

  if (checking) {
    return (
      <div className="h-screen w-full bg-white grid place-items-center">
        <Loader className="animate-spin size-10 text-black" />
      </div>
    );
  }

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Brand */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-12 h-12 grid place-items-center overflow-hidden">
            <img
              src={logo}
              className="w-full h-full object-cover"
              alt="Subrent logo"
            />
          </div>
          <h2 className="text-black font-bold tracking-wider text-2xl">
            SUBRENT
          </h2>
        </div>

        {/* Login Form */}
        <div className="bg-white border border-zinc-300 p-8">
          <h1 className="text-2xl font-bold text-black mb-2">Admin Login</h1>
          <p className="text-zinc-600 text-sm mb-8">
            Enter your credentials to access the dashboard
          </p>

          <form onSubmit={login} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-700 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white border border-zinc-300 text-black px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-zinc-700 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full bg-white border border-zinc-300 text-black px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white px-4 py-3 text-sm font-medium hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader className="animate-spin size-4" />
                  <span>Logging in...</span>
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
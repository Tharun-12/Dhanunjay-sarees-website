// import React, { useState, useEffect } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import BASE_URL from "@/Config/Api";
// import { Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";

// const ResetPassword: React.FC = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const token = searchParams.get("token");
//   const email = searchParams.get("email");
  
//   const [password, setPassword] = useState<string>("");
//   const [confirmPassword, setConfirmPassword] = useState<string>("");
//   const [showPassword, setShowPassword] = useState<boolean>(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [isValidToken, setIsValidToken] = useState<boolean | null>(null);
//   const [isReset, setIsReset] = useState<boolean>(false);
//   const [error, setError] = useState<string>("");

//   useEffect(() => {
//     const verifyToken = async () => {
//       if (!token || !email) {
//         setIsValidToken(false);
//         return;
//       }

//       try {
//         await axios.post(`${BASE_URL}/api/admin/verify-reset-token`, { token, email });
//         setIsValidToken(true);
//       } catch (err: any) {
//         console.error("Token verification failed:", err);
//         setIsValidToken(false);
//       }
//     };

//     verifyToken();
//   }, [token, email]);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
    
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     if (password.length < 6) {
//       setError("Password must be at least 6 characters");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       await axios.post(`${BASE_URL}/api/admin/reset-password`, {
//         token,
//         email,
//         newPassword: password,
//       });
//       setIsReset(true);
//       setTimeout(() => {
//         navigate("/login");
//       }, 3000);
//     } catch (err: any) {
//       setError(err.response?.data?.message || "Failed to reset password");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Invalid token state
//   if (isValidToken === false) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#f4f6f9]">
//         <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 text-center">
//           <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">Invalid Reset Link</h2>
//           <p className="text-gray-600 mb-6">
//             This password reset link is invalid or has expired.
//           </p>
//           <a
//             href="/forgot-password"
//             className="inline-block bg-[#0c2d67] text-white px-6 py-2 rounded-lg hover:bg-[#1a3d7d] transition"
//           >
//             Request New Link
//           </a>
//         </div>
//       </div>
//     );
//   }

//   // Success state
//   if (isReset) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#f4f6f9]">
//         <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 text-center">
//           <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">Password Reset Successful!</h2>
//           <p className="text-gray-600 mb-6">
//             Your password has been changed successfully.
//           </p>
//           <p className="text-sm text-gray-500">Redirecting to login...</p>
//         </div>
//       </div>
//     );
//   }

//   // Loading state
//   if (isValidToken === null) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#f4f6f9]">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0c2d67] mx-auto"></div>
//           <p className="mt-4 text-gray-600">Verifying reset link...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f4f6f9]">
//       <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-bold text-[#0c2d67]">Create New Password</h2>
//           <p className="text-gray-500 text-sm mt-2">
//             Please enter your new password below.
//           </p>
//         </div>

//         {error && (
//           <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* New Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               New Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 required
//                 placeholder="Enter new password"
//                 className="w-full px-4 py-2 border rounded-lg pr-10 focus:ring-2 focus:ring-[#0c2d67] focus:border-transparent outline-none"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Confirm New Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 required
//                 placeholder="Confirm new password"
//                 className="w-full px-4 py-2 border rounded-lg pr-10 focus:ring-2 focus:ring-[#0c2d67] focus:border-transparent outline-none"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//               >
//                 {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>
//           </div>

//           {/* Password Requirements */}
//           <div className="text-sm text-gray-500 space-y-1">
//             <p className="font-medium">Password must contain:</p>
//             <ul className="list-disc list-inside space-y-0.5">
//               <li className={password.length >= 6 ? "text-green-600" : ""}>
//                 At least 6 characters
//               </li>
//             </ul>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white py-2 rounded-lg font-semibold hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {loading ? "Resetting..." : "Reset Password"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;





import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "@/Config/Api";
import { Eye, EyeOff, CheckCircle, XCircle, ArrowLeft } from "lucide-react";
import logo from '@/assets/logg.png';

const ResetPassword: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null);
  const [isReset, setIsReset] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const verifyToken = async () => {
      if (!token || !email) {
        setIsValidToken(false);
        return;
      }

      try {
        await axios.post(`${BASE_URL}/api/admin/verify-reset-token`, { token, email });
        setIsValidToken(true);
      } catch (err: any) {
        console.error("Token verification failed:", err);
        setIsValidToken(false);
      }
    };

    verifyToken();
  }, [token, email]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await axios.post(`${BASE_URL}/api/admin/reset-password`, {
        token,
        email,
        newPassword: password,
      });
      setIsReset(true);
      setTimeout(() => {
        navigate("/admin");
      }, 3000);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  // Invalid token state
  if (isValidToken === false) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f6f9]">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 text-center">
          <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Invalid Reset Link</h2>
          <p className="text-gray-600 mb-6">
            This password reset link is invalid or has expired.
          </p>
          <a
            href="/forgot-password"
            className="inline-block bg-[#0c2d67] text-white px-6 py-2 rounded-lg hover:bg-[#1a3d7d] transition"
          >
            Request New Link
          </a>
        </div>
      </div>
    );
  }

  // Success state
  if (isReset) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f6f9]">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Password Reset Successful!</h2>
          <p className="text-gray-600 mb-6">
            Your password has been changed successfully.
          </p>
          <p className="text-sm text-gray-500">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  // Loading state
  if (isValidToken === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f6f9]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0c2d67] mx-auto"></div>
          <p className="mt-4 text-gray-600">Verifying reset link...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f6f9]">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        {/* Back to Login Link */}
        <div className="mb-4">
          <a 
            href="/admin" 
            className="inline-flex items-center text-sm text-[#0c2d67] hover:underline"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Login
          </a>
        </div>

        {/* LOGO */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={logo}
            alt="Admin Logo"
            className="w-40 h-40 object-contain mb-2"
          />
          <h2 className="text-2xl font-bold text-[#0c2d67]">
            Create New Password
          </h2>
          <p className="text-gray-500 text-sm">
            Please enter your new password below
          </p>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* NEW PASSWORD */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter new password"
                className="w-full px-4 py-2 border rounded-lg pr-10 focus:ring-2 focus:ring-[#0c2d67] focus:border-transparent outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                required
                placeholder="Confirm new password"
                className="w-full px-4 py-2 border rounded-lg pr-10 focus:ring-2 focus:ring-[#0c2d67] focus:border-transparent outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* PASSWORD REQUIREMENTS */}
          <div className="text-sm text-gray-500 space-y-1">
            <p className="font-medium">Password must contain:</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li className={password.length >= 6 ? "text-green-600" : ""}>
                At least 6 characters
              </li>
            </ul>
          </div>

          {/* RESET BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white py-2 rounded-lg font-semibold hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
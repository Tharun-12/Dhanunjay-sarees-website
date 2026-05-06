// import React, { useState } from "react";
// import axios from "axios";
// import BASE_URL from "@/Config/Api";
// import { ArrowLeft, Mail } from "lucide-react";

// const ForgotPassword: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string>("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       await axios.post(`${BASE_URL}/api/admin/forgot-password`, { email });
//       setIsSubmitted(true);
//     } catch (err: any) {
//       setError(err.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (isSubmitted) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#f4f6f9]">
//         <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 text-center">
//           <div className="mb-4">
//             <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
//               <Mail className="w-8 h-8 text-green-600" />
//             </div>
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">Check Your Email</h2>
//           <p className="text-gray-600 mb-4">
//             We've sent a password reset link to <strong>{email}</strong>
//           </p>
//           <p className="text-sm text-gray-500 mb-6">
//             The link will expire in 1 hour.
//           </p>
//           <a
//             href="/login"
//             className="inline-block text-[#0c2d67] hover:underline"
//           >
//             ← Back to Login
//           </a>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f4f6f9]">
//       <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
//         <a href="/admin" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
//           <ArrowLeft size={20} className="mr-2" />
//           Back to Login
//         </a>

//         <div className="text-center mb-6">
//           <h2 className="text-2xl font-bold text-[#0c2d67]">Forgot Password?</h2>
//           <p className="text-gray-500 text-sm mt-2">
//             Enter your email address and we'll send you a link to reset your password.
//           </p>
//         </div>

//         {error && (
//           <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               required
//               placeholder="Enter your registered email"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0c2d67] focus:border-transparent outline-none"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-[#0c2d67] text-white py-2 rounded-lg font-semibold hover:bg-[#1a3d7d] transition disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {loading ? "Sending..." : "Send Reset Link"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;



// import React, { useState } from "react";
// import axios from "axios";
// import BASE_URL from "@/Config/Api";
// import { ArrowLeft, Mail } from "lucide-react";
// import logo from '@/assets/logg.png';

// const ForgotPassword: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string>("");

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       await axios.post(`${BASE_URL}/api/admin/forgot-password`, { email });
//       setIsSubmitted(true);
//     } catch (err: any) {
//       setError(err.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (isSubmitted) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#f4f6f9]">
//         <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 text-center">
//           <div className="flex flex-col items-center mb-6">
//             <img src={logo} alt="Admin Logo" className="w-40 h-40 object-contain mb-2" />
//           </div>
//           <div className="mb-4">
//             <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
//               <Mail className="w-8 h-8 text-green-600" />
//             </div>
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">Check Your Email</h2>
//           <p className="text-gray-600 mb-4">
//             We've sent a password reset link to <strong>{email}</strong>
//           </p>
//           <p className="text-sm text-gray-500 mb-6">
//             The link will expire in 1 hour.
//           </p>
//           <a
//             href="/admin"
//             className="inline-block bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition shadow-lg"
//           >
//             Back to Login
//           </a>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f4f6f9]">
//       <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
//         <div className="mb-4">
//           <a href="/admin" className="inline-flex items-center text-sm text-[#0c2d67] hover:underline">
//             <ArrowLeft size={16} className="mr-1" />
//             Back to Login
//           </a>
//         </div>

//         <div className="flex flex-col items-center mb-6">
//           <img src={logo} alt="Admin Logo" className="w-40 h-40 object-contain mb-2" />
//           <h2 className="text-2xl font-bold text-[#0c2d67]">Forgot Password?</h2>
//           <p className="text-gray-500 text-sm mt-2">
//             Enter your email address and we'll send you a link to reset your password.
//           </p>
//         </div>

//         {error && (
//           <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               required
//               placeholder="Enter your registered email"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0c2d67] focus:border-transparent outline-none"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white py-2 rounded-lg font-semibold hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
//           >
//             {loading ? "Sending..." : "Send Reset Link"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;



import React, { useState } from "react";
import axios from "axios";
import BASE_URL from "@/Config/Api";
import { ArrowLeft, Mail } from "lucide-react";
import logo from '@/assets/logg.png';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const sareeImages = [
    "https://i.pinimg.com/1200x/20/09/b0/2009b038ab57f8b255684f542f5764c6.jpg",
    "https://i.pinimg.com/1200x/1e/e9/5b/1ee95b7b22246cc426466a1a6af67fd9.jpg",
    "https://i.pinimg.com/736x/fd/a4/c4/fda4c452a56486b6099db4556d846b89.jpg",
    "https://i.pinimg.com/1200x/cd/37/3a/cd373ad96d7110ff725f6d4a7861f2c6.jpg",
    "https://i.pinimg.com/736x/69/b0/1e/69b01ee110756ce06d8b721f5bfdf40e.jpg",
    "https://i.pinimg.com/1200x/f2/ea/dd/f2eadd0364c4924cbcdc26a194cfc00a.jpg",
    "https://i.pinimg.com/736x/68/81/61/68816107ee5eae7826173f99ca395cf6.jpg",
    "https://i.pinimg.com/736x/b0/b3/7d/b0b37d098b116defba3629efeab4d2bd.jpg",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post(`${BASE_URL}/api/admin/forgot-password`, { email });
      setIsSubmitted(true);
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-0">
        {sareeImages.map((img, i) => (
          <div key={i} className="relative w-full h-screen overflow-hidden">
            <img
              src={img}
              alt="saree"
              className="w-full h-full object-cover object-center brightness-110 contrast-110"
            />
          </div>
        ))}
      </div>

      {/* 🌑 OVERLAY */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* ========================= */}
      {/* ✅ SUCCESS SCREEN */}
      {/* ========================= */}
      {isSubmitted ? (
        <div className="relative z-10 w-full max-w-md px-4">
          <div className="bg-white shadow-xl rounded-2xl p-8 text-center border border-gray-200">

            <img src={logo} alt="Admin Logo" className="w-32 h-32 mx-auto mb-4" />

            <div className="mb-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Check Your Email
            </h2>

            <p className="text-gray-600 mb-1">
              We've sent a reset link to
            </p>

            <p className="font-semibold text-pink-600 mb-4">
              {email}
            </p>

            <p className="text-sm text-gray-500 mb-6">
              The link will expire in 1 hour.
            </p>

            <a
              href="/admin"
              className="inline-block 
              bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 
              text-white px-6 py-2 rounded-lg font-semibold 
              hover:scale-[1.02] transition shadow-md"
            >
              Back to Login
            </a>
          </div>
        </div>
      ) : (
        /* ========================= */
        /* 🔐 FORM SCREEN */
        /* ========================= */
        <div className="relative z-10 w-full max-w-md px-4">
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">

            {/* BACK */}
            <div className="mb-4">
              <a href="/admin" className="inline-flex items-center text-sm text-pink-600 hover:underline">
                <ArrowLeft size={16} className="mr-1" />
                Back to Login
              </a>
            </div>

            {/* LOGO */}
            <div className="flex flex-col items-center mb-6">
              <img src={logo} alt="Admin Logo" className="w-32 h-32 object-contain mb-2" />

              <h2 className="text-2xl font-bold text-pink-700">
                Forgot Password?
              </h2>

              <p className="text-gray-500 text-sm mt-2 text-center">
                Enter your email to receive a reset link
              </p>
            </div>

            {/* ERROR */}
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your registered email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg 
                  focus:ring-2 focus:ring-pink-300 focus:border-pink-400 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full 
                bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 
                text-white py-2 rounded-lg font-semibold 
                hover:scale-[1.02] transition shadow-md disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
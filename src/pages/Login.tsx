// import React, { useState } from "react";
// import logo from '@/assets/logg.png';
// import axios from "axios";
// import BASE_URL from "@/Config/Api";
// import { Eye, EyeOff } from "lucide-react";


// const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(`${BASE_URL}/api/admin/login`, {
//         email,
//         password,
//       });

//       // ✅ store token
//       localStorage.setItem("token", res.data.token);

//       alert("Login successful ✅");

//       // ✅ redirect to dashboard
//       window.location.href = "/contacts";

//     } catch (err: any) {
//       alert(err.response?.data?.message || "Login failed ❌");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f4f6f9]">
//       <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

//         {/* LOGO */}
//         <div className="flex flex-col items-center mb-6">
//           <img
//             src={logo}
//             alt="Admin Logo"
//             className="w-40 h-40 object-contain mb-2"
//           />
//           <h2 className="text-2xl font-bold text-[#0c2d67]">
//             Admin Login
//           </h2>
//           <p className="text-gray-500 text-sm">
//             Sign in to your account
//           </p>
//         </div>

//         {/* FORM */}
//         <form className="space-y-5" onSubmit={handleLogin}>

//           {/* EMAIL */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border rounded-lg"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           {/* PASSWORD */}
//           <div>
//   <label className="block text-sm font-medium text-gray-700 mb-1">
//     Password
//   </label>

//   <div className="relative">
//     <input
//       type={showPassword ? "text" : "password"}
//       placeholder="Enter your password"
//       className="w-full px-4 py-2 border rounded-lg pr-10"
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//     />

//     {/* Eye Icon */}
//     <button
//       type="button"
//       onClick={() => setShowPassword(!showPassword)}
//       className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
//     >
//       {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//     </button>
//   </div>
// </div>

//           {/* REMEMBER + FORGOT */}
//           <div className="flex justify-between items-center text-sm">
//             <label className="flex items-center gap-2">
//               <input type="checkbox" />
//               Remember me
//             </label>
//             <a href="forgot-password" className="text-[#0c2d67] hover:underline">
//               Forgot password?
//             </a>
//           </div>

//           {/* BUTTON */}
//           <button
//             type="submit"
//               className="w-full hidden sm:inline-flex justify-center items-center bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white border-0 shadow-lg hover:scale-105 transition py-2 rounded-lg font-semibold"
//           >
//             Login
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;




// import React, { useState } from "react";
// import logo from '@/assets/logg.png';
// import axios from "axios";
// import BASE_URL from "@/Config/Api";
// import { Eye, EyeOff } from "lucide-react";

// const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(`${BASE_URL}/api/admin/login`, {
//         email,
//         password,
//       });

//       localStorage.setItem("token", res.data.token);
//       alert("Login successful ✅");
//       window.location.href = "/contacts";

//     } catch (err: any) {
//       alert(err.response?.data?.message || "Login failed ❌");
//     }
//   };

//   return (
//     <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#fdf8f5]">

//       {/* MASONRY BACKGROUND */}
//       <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 opacity-40">

//         <div className="h-32 bg-gradient-to-br from-pink-200 to-yellow-200 rounded-xl"></div>
//         <div className="h-52 bg-gradient-to-br from-orange-200 to-rose-200 rounded-xl"></div>
//         <div className="h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl"></div>
//         <div className="h-60 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-xl"></div>

//         <div className="h-44 bg-gradient-to-br from-red-200 to-pink-200 rounded-xl"></div>
//         <div className="h-28 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-xl"></div>
//         <div className="h-56 bg-gradient-to-br from-fuchsia-200 to-rose-200 rounded-xl"></div>
//         <div className="h-36 bg-gradient-to-br from-orange-200 to-amber-200 rounded-xl"></div>

//       </div>

//       {/* BLUR OVERLAY */}
//       <div className="absolute inset-0 backdrop-blur-[6px] bg-white/50"></div>

//       {/* LOGIN CARD */}
//       <div className="relative z-10 w-full max-w-md 
//         bg-white/80 backdrop-blur-xl 
//         shadow-2xl rounded-2xl p-8 border border-white/40">

//         {/* LOGO */}
//         <div className="flex flex-col items-center mb-6">
//           <div className="relative">
//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-yellow-300 blur-xl opacity-30"></div>
//             <img
//               src={logo}
//               alt="Admin Logo"
//               className="w-40 h-40 object-contain mb-2 relative z-10"
//             />
//           </div>

//           <h2 className="text-2xl font-bold 
//             bg-gradient-to-r from-[#8b005d] via-[#c2185b] to-[#ff9800] 
//             bg-clip-text text-transparent">
//             Admin Login
//           </h2>

//           <p className="text-gray-500 text-sm">
//             Sign in to your account
//           </p>
//         </div>

//         {/* FORM */}
//         <form className="space-y-5" onSubmit={handleLogin}>

//           {/* EMAIL */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border border-gray-200 rounded-lg 
//               focus:ring-2 focus:ring-pink-300 focus:border-pink-400 
//               transition-all duration-300 outline-none bg-white/80"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           {/* PASSWORD */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>

//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 className="w-full px-4 py-2 border border-gray-200 rounded-lg pr-10
//                 focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 
//                 transition-all duration-300 outline-none bg-white/80"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-pink-600 transition"
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>
//           </div>

//           {/* REMEMBER + FORGOT */}
//           <div className="flex justify-between items-center text-sm">
//             <label className="flex items-center gap-2 text-gray-600">
//               <input type="checkbox" className="accent-pink-500" />
//               Remember me
//             </label>
//             <a href="forgot-password" className="text-pink-600 hover:underline">
//               Forgot password?
//             </a>
//           </div>

//           {/* BUTTON */}
//           <button
//             type="submit"
//             className="w-full 
//             bg-gradient-to-r from-[#c2185b] via-[#e91e63] to-[#ff9800] 
//             text-white shadow-lg hover:shadow-xl 
//             hover:scale-[1.03] transition-all duration-300 
//             py-2 rounded-lg font-semibold tracking-wide"
//           >
//             Login
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;

import React, { useState } from "react";
import logo from '@/assets/logg.png';
import axios from "axios";
import BASE_URL from "@/Config/Api";
import { Eye, EyeOff } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_URL}/api/admin/login`, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login successful ✅");
      window.location.href = "/contacts";

    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed ❌");
    }
  };

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

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black">

      {/* 🔥 BACKGROUND IMAGES (CLEAR) */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-0">
        {sareeImages.map((img, i) => (
          <div key={i} className="relative w-full h-screen overflow-hidden">
            <img
              src={img}
              alt="saree"
              className="w-full h-full object-cover object-center 
              brightness-110 contrast-110"
            />
          </div>
        ))}
      </div>

      {/* 🌑 BLACK OVERLAY (PERFECT BALANCE) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🧊 LOGIN CARD */}
      <div className="relative z-10 w-full max-w-md px-4">
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">

          {/* LOGO */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={logo}
              alt="Admin Logo"
              className="w-32 h-32 object-contain mb-2"
            />

            <h2 className="text-2xl font-bold text-pink-700">
              Admin Login
            </h2>

            <p className="text-gray-500 text-sm">
              Sign in to your account
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-5" onSubmit={handleLogin}>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg 
                focus:ring-2 focus:ring-pink-300 focus:border-pink-400 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg pr-10
                  focus:ring-2 focus:ring-orange-300 focus:border-orange-400 outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-pink-500" />
                Remember me
              </label>
              <a href="forgot-password" className="text-pink-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full 
              bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400
              text-white shadow-md hover:shadow-lg
              hover:scale-[1.02] transition 
              py-2 rounded-lg font-semibold"
            >
              Login
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
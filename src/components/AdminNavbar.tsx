// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Moon, Sun, Phone, Mail, MapPin, Bell, User } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import logo from '@/assets/logg.png';

// const navItems = [
//   { path: '/', label: 'Dashboard', icon: '📊' },
//   { path: '/contacts', label: 'Enquiries', icon: '📧' },
//   { path: '/orders', label: 'Orders', icon: '📦' },
//   { path: '/products', label: 'Products', icon: '👗' },
//   { path: '/customers', label: 'Customers', icon: '👥' },
// ];

// export default function AdminNavbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [dark, setDark] = useState(false);
//   const [notifications, setNotifications] = useState(3);
//   const location = useLocation();

//   // Scroll effect
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   // Dark mode toggle
//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', dark);
//   }, [dark]);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         scrolled
//           ? 'backdrop-blur-xl shadow-2xl border-b border-orange-200/50'
//           : 'shadow-xl'
//       }`}
//       style={{
//         background: scrolled
//           ? 'linear-gradient(135deg, rgba(255, 241, 242, 0.95), rgba(254, 252, 232, 0.95), rgba(239, 246, 255, 0.95))'
//           : 'linear-gradient(135deg, #FFF1F2, #FEFCE8, #EFF6FF)',
//       }}
//     >
//       {/* Top Decorative Border - Saree Pattern */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-pink-500 via-red-500 via-yellow-500 to-pink-500 animate-gradient-x" />
      
//       {/* Decorative Dots Pattern */}
//       <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-200/50 via-pink-200/50 to-yellow-200/50" />

//       <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">

//         {/* LOGO Section */}
//         <Link to="/" className="flex items-center gap-3 group">
//           <div className="relative">
//             <img
//               src={logo}
//               alt="Pragati Sarees"
//               className="h-16 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
//             />
//             {/* Decorative ring around logo */}
//             <div className="absolute inset-0 rounded-full border-2 border-orange-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </div>
//           <div className="hidden sm:block">
//             <h1 className="text-xl font-bold bg-gradient-to-r from-orange-700 via-red-700 to-pink-700 bg-clip-text text-transparent">
//               Pragati Sarees
//             </h1>
//             <p className="text-xs text-orange-600 font-medium">Wholesale Saree Specialists</p>
//           </div>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-2">
//           {navItems.map(item => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group ${
//                 location.pathname === item.path
//                   ? 'text-white shadow-lg'
//                   : 'text-gray-700 hover:text-orange-700 hover:bg-orange-50'
//               }`}
//             >
//               {/* Active tab background */}
//               {location.pathname === item.path && (
//                 <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 -z-10 shadow-md" />
//               )}
//               <span className="flex items-center gap-2">
//                 <span className="text-lg">{item.icon}</span>
//                 <span>{item.label}</span>
//               </span>
              
//               {/* Hover effect */}
//               {location.pathname !== item.path && (
//                 <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
//               )}
//             </Link>
//           ))}
//         </nav>

//         {/* Right Section - Notifications, Profile, Dark Mode */}
//         <div className="flex items-center gap-3">
//           {/* Notification Bell */}
//           <button className="relative p-2 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300 group">
//             <Bell className="w-5 h-5 text-orange-600 group-hover:text-pink-600 transition-colors" />
//             {notifications > 0 && (
//               <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
//                 {notifications}
//               </span>
//             )}
//           </button>

//           {/* Dark/Light Mode Toggle */}
//           <button
//             onClick={() => setDark(!dark)}
//             className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300"
//           >
//             {dark ? (
//               <Sun className="w-5 h-5 text-yellow-500" />
//             ) : (
//               <Moon className="w-5 h-5 text-orange-600" />
//             )}
//           </button>

//           {/* Profile Dropdown (Simplified) */}
//           <div className="hidden sm:flex items-center gap-2 pl-2 border-l-2 border-orange-200">
//             <div className="w-9 h-9 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 flex items-center justify-center shadow-md">
//               <User className="w-5 h-5 text-white" />
//             </div>
//             <div className="hidden lg:block">
//               <p className="text-sm font-semibold text-gray-800">Admin</p>
//               <p className="text-xs text-orange-600">Wholesale Manager</p>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setMobileOpen(!mobileOpen)}
//             className="md:hidden p-2 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300"
//           >
//             {mobileOpen ? (
//               <X className="w-6 h-6 text-orange-600" />
//             ) : (
//               <Menu className="w-6 h-6 text-orange-600" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Quick Stats Bar (Visible when scrolled) */}
//       {scrolled && (
//         <div className="hidden lg:block px-4 py-1 border-t border-orange-100/50 bg-white/30 backdrop-blur-sm">
//           <div className="container mx-auto flex items-center justify-between text-xs">
//             <div className="flex items-center gap-4">
//               <span className="flex items-center gap-1 text-orange-700">
//                 <Phone className="w-3 h-3" /> +91 9328015392
//               </span>
//               <span className="flex items-center gap-1 text-orange-700">
//                 <Mail className="w-3 h-3" /> bankteshcreationpvtltd@gmail.com
//               </span>
//               <span className="flex items-center gap-1 text-orange-700">
//                 <MapPin className="w-3 h-3" /> Surat, India
//               </span>
//             </div>
//             <div className="flex items-center gap-3">
//               <span className="text-orange-600">🪔 Traditional Sarees</span>
//               <span className="text-red-500">•</span>
//               <span className="text-pink-600">✨ Wholesale Price</span>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden transition-all duration-500 overflow-hidden ${
//           mobileOpen ? 'max-h-96 backdrop-blur-xl' : 'max-h-0'
//         }`}
//         style={{
//           background: 'linear-gradient(135deg, #FFF1F2, #FEFCE8, #EFF6FF)',
//         }}
//       >
//         <nav className="flex flex-col p-4 gap-2 border-t border-orange-100">
//           {navItems.map(item => (
//             <Link
//               key={item.path}
//               to={item.path}
//               onClick={() => setMobileOpen(false)}
//               className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${
//                 location.pathname === item.path
//                   ? 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white shadow-lg'
//                   : 'text-gray-700 hover:bg-orange-50 hover:text-orange-700'
//               }`}
//             >
//               <span className="text-xl">{item.icon}</span>
//               <span>{item.label}</span>
//               {location.pathname === item.path && (
//                 <span className="ml-auto text-white">✨</span>
//               )}
//             </Link>
//           ))}
          
//           {/* Mobile Contact Info */}
//           <div className="mt-4 pt-4 border-t-2 border-orange-200">
//             <div className="space-y-2">
//               <a href="tel:+919328015392" className="flex items-center gap-2 text-sm text-orange-700 hover:text-pink-700">
//                 <Phone className="w-4 h-4" /> +91 9328015392
//               </a>
//               <a href="mailto:bankteshcreationpvtltd@gmail.com" className="flex items-center gap-2 text-sm text-orange-700 hover:text-pink-700">
//                 <Mail className="w-4 h-4" /> bankteshcreationpvtltd@gmail.com
//               </a>
//               <div className="flex items-center gap-2 text-sm text-orange-700">
//                 <span>🪔</span> <span>Pragati Sarees - Since 2024</span>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>

//       {/* Add custom animation CSS */}
//       <style>{`
//         @keyframes gradient-x {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }
//         .animate-gradient-x {
//           background-size: 200% 200%;
//           animation: gradient-x 3s ease infinite;
//         }
//       `}</style>
//     </header>
//   );
// }



import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logg.png';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/contacts', label: 'Contact Submissions' },
];

export default function AdminNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl shadow-2xl border-b border-orange-200/50'
          : 'shadow-xl'
      }`}
      style={{
        background: scrolled
          ? 'linear-gradient(135deg, rgba(255, 241, 242, 0.95), rgba(254, 252, 232, 0.95), rgba(239, 246, 255, 0.95))'
          : 'linear-gradient(135deg, #FFF1F2, #FEFCE8, #EFF6FF)',
      }}
    >
      {/* Top Decorative Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-pink-500 via-red-500 via-yellow-500 to-pink-500 animate-gradient-x" />

      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">

        {/* LOGO Section - Left Side */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src={logo}
              alt="Pragati Sarees"
              className="h-16 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          {/* <div className="hidden sm:block">
            <h1 className="text-xl font-bold bg-gradient-to-r from-orange-700 via-red-700 to-pink-700 bg-clip-text text-transparent">
              Pragati Sarees
            </h1>
            <p className="text-xs text-orange-600 font-medium">Wholesale Saree Specialists</p>
          </div> */}
        </Link>

        {/* Desktop Navigation - Right Side */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                location.pathname === item.path
                  ? 'text-white'
                  : 'text-gray-700 hover:text-orange-700 hover:bg-orange-50'
              }`}
            >
              {location.pathname === item.path && (
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 -z-10 shadow-md" />
              )}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-orange-600" />
            ) : (
              <Menu className="w-6 h-6 text-orange-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-96' : 'max-h-0'
        }`}
        style={{
          background: 'linear-gradient(135deg, #FFF1F2, #FEFCE8, #EFF6FF)',
        }}
      >
        <nav className="flex flex-col p-4 gap-2 border-t border-orange-100">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                location.pathname === item.path
                  ? 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-orange-50 hover:text-orange-700'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Add custom animation CSS */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </header>
  );
}
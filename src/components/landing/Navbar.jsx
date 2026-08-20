// import { Link } from "react-router-dom";

// export default function Navbar({ onDemoClick }) {
//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
//       <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-6">
//         {/* Logo */}
//         <div className="flex items-center gap-3 cursor-pointer">
//           <img src="/images/logo.png" alt="SnapPrint Logo" width={50} height={50} className="rounded-lg" />
//           <div>
//             <h1 className="text-2xl font-bold tracking-tight text-white">
//               Snap<span className="text-sky-400">Print</span>
//             </h1>
//             <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Smart Printing</p>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="hidden lg:flex items-center gap-10">
//           <a href="#" className="relative text-white font-medium transition hover:text-sky-400">
//             Home
//             <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-sky-400"></span>
//           </a>
//           <a href="#features" className="font-medium text-slate-300 transition hover:text-sky-400">
//             Features
//           </a>
//           <a href="#how" className="font-medium text-slate-300 transition hover:text-sky-400">
//             How It Works
//           </a>
//           <a href="#contact" className="font-medium text-slate-300 transition hover:text-sky-400">
//             Contact
//           </a>
//         </div>

//         {/* CTA Buttons */}
//         <div className="hidden lg:flex items-center gap-3">
//           <Link
//             to="/login"
//             className="flex items-center rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
//           >
//             Login
//           </Link>
//           <button
//             onClick={onDemoClick}
//             className="flex items-center rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/40"
//           >
//             Request Demo
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }


import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar({ onDemoClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={closeMenu}>
          <img
            src="/images/logo.png"
            alt="SnapPrint Logo"
            width={50}
            height={50}
            className="rounded-lg w-9 h-9 sm:w-[50px] sm:h-[50px]"
          />
          <div>
            <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-white">
              Snap<span className="text-sky-400">Print</span>
            </h1>
            <p className="hidden sm:block text-[11px] uppercase tracking-[0.25em] text-slate-400">
              Smart Printing
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <a href="#" className="relative text-white font-medium transition hover:text-sky-400">
            Home
            <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-sky-400"></span>
          </a>
          <a href="#features" className="font-medium text-slate-300 transition hover:text-sky-400">
            Features
          </a>
          <a href="#how" className="font-medium text-slate-300 transition hover:text-sky-400">
            How It Works
          </a>
          <a href="#contact" className="font-medium text-slate-300 transition hover:text-sky-400">
            Contact
          </a>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/login"
            className="flex items-center rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
          >
            Login
          </Link>
          <button
            onClick={onDemoClick}
            className="flex items-center rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/40"
          >
            Request Demo
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white p-2 -mr-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-white/10 bg-slate-950/95 backdrop-blur-xl " +
          (mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")
        }
      >
        <div className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map(function (item) {
            return (
              <a key={item.label} href={item.href} onClick={closeMenu} className="text-slate-200 font-medium py-3 px-2 rounded-lg transition hover:bg-white/5 hover:text-sky-400">
                {item.label}
              </a>
            );
          })}

          <div className="flex flex-col gap-3 mt-3 pt-3 border-t border-white/10">
            <Link
              to="/login"
              onClick={closeMenu}
              className="text-center rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
            >
              Login
            </Link>
            <button
              onClick={() => {
                closeMenu();
                onDemoClick();
              }}
              className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400"
            >
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
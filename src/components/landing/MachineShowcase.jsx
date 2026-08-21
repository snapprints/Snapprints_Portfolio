

// import { CheckCircle, Smartphone, ShieldCheck, Wifi, CreditCard, Printer } from "lucide-react";

// export default function MachineShowcase() {
//   return (
//     <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 sm:py-28 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
//         {/* Machine Image */}
//         <div className="relative flex justify-center">
//           <div className="absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-sky-500/20 blur-[100px] sm:blur-[120px]" />
//           <img
//             src="/images/machine.png"
//             alt="SnapPrint Machine"
//             className="relative w-52 sm:w-72 md:w-96 lg:w-[420px] h-auto hover:scale-105 transition duration-500 drop-shadow-[0_0_40px_rgba(14,165,233,0.35)]"
//           />
//         </div>

//         {/* Content */}
//         <div className="text-center lg:text-left">
//           <p className="text-sky-400 uppercase tracking-[0.35em] font-semibold text-xs sm:text-sm">Smart Printing Kiosk</p>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 leading-tight">
//             Built for the
//             <span className="text-sky-400"> Future of Printing</span>
//           </h2>
//           <p className="mt-6 sm:mt-8 text-slate-400 text-base sm:text-lg leading-7 sm:leading-8">
//             SnapPrint is an intelligent self-service printing kiosk that enables users to upload documents, pay
//             digitally and print instantly without any human assistance.
//           </p>

//           {/* Features */}
//           <div className="grid grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-10 text-left">
//             <div className="flex items-center gap-2 sm:gap-3">
//               <CheckCircle className="text-sky-400 shrink-0" size={18} />
//               <span className="text-sm sm:text-base">QR Code Printing</span>
//             </div>
//             <div className="flex items-center gap-2 sm:gap-3">
//               <Smartphone className="text-sky-400 shrink-0" size={18} />
//               <span className="text-sm sm:text-base">Mobile Upload</span>
//             </div>
//             <div className="flex items-center gap-2 sm:gap-3">
//               <CreditCard className="text-sky-400 shrink-0" size={18} />
//               <span className="text-sm sm:text-base">UPI Payments</span>
//             </div>
//             <div className="flex items-center gap-2 sm:gap-3">
//               <Printer className="text-sky-400 shrink-0" size={18} />
//               <span className="text-sm sm:text-base">Instant Printing</span>
//             </div>
//             <div className="flex items-center gap-2 sm:gap-3">
//               <ShieldCheck className="text-sky-400 shrink-0" size={18} />
//               <span className="text-sm sm:text-base">Secure Documents</span>
//             </div>
//             <div className="flex items-center gap-2 sm:gap-3">
//               <Wifi className="text-sky-400 shrink-0" size={18} />
//               <span className="text-sm sm:text-base">Cloud Connected</span>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-10 sm:mt-14">
//             <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6 text-center">
//               <h3 className="text-xl sm:text-3xl font-bold text-sky-400">24×7</h3>
//               <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-sm">Available</p>
//             </div>
//             <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6 text-center">
//               <h3 className="text-xl sm:text-3xl font-bold text-sky-400">100%</h3>
//               <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-sm">Contactless</p>
//             </div>
//             <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6 text-center">
//               <h3 className="text-xl sm:text-3xl font-bold text-sky-400">UPI</h3>
//               <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-sm">Enabled</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { CheckCircle, Smartphone, ShieldCheck, Wifi, CreditCard, Printer } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function MachineShowcase() {
  return (
    <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 sm:py-28 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
        {/* Machine Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-sky-500/20 blur-[100px] sm:blur-[120px]" />
          <img
            src="/images/machine.png"
            alt="SnapPrint Machine"
            className="relative w-52 sm:w-72 md:w-96 lg:w-[420px] h-auto drop-shadow-[0_0_40px_rgba(14,165,233,0.35)] animate-float"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center lg:text-left"
        >
          <p className="text-sky-400 uppercase tracking-[0.35em] font-semibold text-xs sm:text-sm">Smart Printing Kiosk</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 leading-tight">
            Built for the
            <span className="text-sky-400"> Future of Printing</span>
          </h2>
          <p className="mt-6 sm:mt-8 text-slate-400 text-base sm:text-lg leading-7 sm:leading-8">
            SnapPrint is an intelligent self-service printing kiosk that enables users to upload documents, pay
            digitally and print instantly without any human assistance.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-10 text-left">
            <div className="flex items-center gap-2 sm:gap-3">
              <CheckCircle className="text-sky-400 shrink-0" size={18} />
              <span className="text-sm sm:text-base">QR Code Printing</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Smartphone className="text-sky-400 shrink-0" size={18} />
              <span className="text-sm sm:text-base">Mobile Upload</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <CreditCard className="text-sky-400 shrink-0" size={18} />
              <span className="text-sm sm:text-base">UPI Payments</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Printer className="text-sky-400 shrink-0" size={18} />
              <span className="text-sm sm:text-base">Instant Printing</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <ShieldCheck className="text-sky-400 shrink-0" size={18} />
              <span className="text-sm sm:text-base">Secure Documents</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Wifi className="text-sky-400 shrink-0" size={18} />
              <span className="text-sm sm:text-base">Cloud Connected</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-10 sm:mt-14">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6 text-center">
              <h3 className="text-xl sm:text-3xl font-bold text-sky-400">24×7</h3>
              <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-sm">Available</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6 text-center">
              <h3 className="text-xl sm:text-3xl font-bold text-sky-400">100%</h3>
              <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-sm">Contactless</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6 text-center">
              <h3 className="text-xl sm:text-3xl font-bold text-sky-400">UPI</h3>
              <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-sm">Enabled</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
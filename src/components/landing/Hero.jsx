
// export default function Hero({ onDemoClick }) {
//   return (
//     <section className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
//       <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-sky-500/20 rounded-full blur-[100px] sm:blur-[120px]" />
//       <div className="absolute bottom-0 right-0 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-cyan-500/10 rounded-full blur-[120px] sm:blur-[150px]" />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 sm:py-24 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
//         {/* Left Content */}
//         <div className="text-center lg:text-left">
//           <span className="inline-block bg-sky-500/10 border border-sky-500/30 text-sky-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider">
//             India&apos;s Smart Self-Service Printing Machine
//           </span>

//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-6 sm:mt-8 leading-tight">
//             Print
//             <span className="text-sky-400"> Smarter</span>
//             <br />
//             Anytime.
//             <br />
//             Anywhere.
//           </h1>

//           <p className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-300 leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0">
//             Upload documents from your phone, pay securely using UPI, and collect your prints instantly from the
//             SnapPrint kiosk.
//           </p>

//           <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
//             <button
//               onClick={onDemoClick}
//               className="bg-sky-500 hover:bg-sky-400 transition px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold shadow-lg shadow-sky-500/30"
//             >
//               Request Demo
//             </button>

//             <button className="border border-slate-700 hover:border-sky-400 transition px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold">
//               Learn More
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="mt-10 sm:mt-14 grid grid-cols-3 gap-3 sm:gap-8">
//             <div>
//               <h3 className="text-xl sm:text-3xl font-bold text-sky-400">24×7</h3>
//               <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-base">Available</p>
//             </div>
//             <div>
//               <h3 className="text-xl sm:text-3xl font-bold text-sky-400">100%</h3>
//               <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-base">Contactless</p>
//             </div>
//             <div>
//               <h3 className="text-xl sm:text-3xl font-bold text-sky-400">60 Sec</h3>
//               <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-base">Average Print</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="flex justify-center relative order-first lg:order-last">
//           <div className="absolute w-56 h-56 sm:w-80 sm:h-80 bg-sky-500/20 rounded-full blur-[100px] sm:blur-[120px]" />
//           <img
//             src="/images/machine.png"
//             alt="SnapPrint Machine"
//             className="relative w-48 sm:w-64 md:w-80 lg:w-[430px] h-auto drop-shadow-[0_0_40px_rgba(14,165,233,0.5)] hover:scale-105 transition duration-500"
//           />
//         </div>
//       </div>

//       {/* Bottom Feature Strip */}
//       <div className="border-t border-slate-800 bg-slate-900/60 backdrop-blur">
//         <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-5 sm:gap-8 px-4 sm:px-6 py-6 sm:py-8">
//           <div className="text-center">
//             <h4 className="font-semibold text-sky-400 text-sm sm:text-base">Secure Printing</h4>
//             <p className="text-slate-400 text-xs sm:text-sm mt-1 sm:mt-2">Files are deleted automatically after printing.</p>
//           </div>
//           <div className="text-center">
//             <h4 className="font-semibold text-sky-400 text-sm sm:text-base">Instant Printing</h4>
//             <p className="text-slate-400 text-xs sm:text-sm mt-1 sm:mt-2">Print documents in under one minute.</p>
//           </div>
//           <div className="text-center">
//             <h4 className="font-semibold text-sky-400 text-sm sm:text-base">UPI Payments</h4>
//             <p className="text-slate-400 text-xs sm:text-sm mt-1 sm:mt-2">Fast and secure digital payments.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export default function Hero({ onDemoClick }) {
  return (
    <section className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-sky-500/20 rounded-full blur-[100px] sm:blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-cyan-500/10 rounded-full blur-[120px] sm:blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 sm:py-24 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        {/* Left Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left"
        >
          <motion.span
            variants={item}
            className="inline-block bg-sky-500/10 border border-sky-500/30 text-sky-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider"
          >
            India&apos;s Smart Self-Service Printing Machine
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-6 sm:mt-8 leading-tight"
          >
            Print
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent animate-gradient-x"> Smarter</span>
            <br />
            Anytime.
            <br />
            Anywhere.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-300 leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0"
          >
            Upload documents from your phone, pay securely using UPI, and collect your prints instantly from the
            Snapprints kiosk.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onDemoClick}
              className="bg-sky-500 hover:bg-sky-400 transition-colors px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold shadow-lg shadow-sky-500/30"
            >
              Request Demo
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="border border-slate-700 hover:border-sky-400 transition-colors px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="mt-10 sm:mt-14 grid grid-cols-3 gap-3 sm:gap-8">
            <div>
              <h3 className="text-xl sm:text-3xl font-bold text-sky-400">24×7</h3>
              <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-base">Available</p>
            </div>
            <div>
              <h3 className="text-xl sm:text-3xl font-bold text-sky-400">100%</h3>
              <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-base">Contactless</p>
            </div>
            <div>
              <h3 className="text-xl sm:text-3xl font-bold text-sky-400">60 Sec</h3>
              <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-base">Average Print</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex justify-center relative order-first lg:order-last"
        >
          <div className="absolute w-56 h-56 sm:w-80 sm:h-80 bg-sky-500/20 rounded-full blur-[100px] sm:blur-[120px]" />
          <img
            src="/images/machine.png"
            alt="Snapprints Machine"
            className="relative w-48 sm:w-64 md:w-80 lg:w-[430px] h-auto drop-shadow-[0_0_40px_rgba(14,165,233,0.5)] animate-float"
          />
        </motion.div>
      </div>

      {/* Bottom Feature Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-slate-800 bg-slate-900/60 backdrop-blur"
      >
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-5 sm:gap-8 px-4 sm:px-6 py-6 sm:py-8">
          <div className="text-center">
            <h4 className="font-semibold text-sky-400 text-sm sm:text-base">Secure Printing</h4>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 sm:mt-2">Files are deleted automatically after printing.</p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-sky-400 text-sm sm:text-base">Instant Printing</h4>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 sm:mt-2">Print documents in under one minute.</p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-sky-400 text-sm sm:text-base">UPI Payments</h4>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 sm:mt-2">Fast and secure digital payments.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
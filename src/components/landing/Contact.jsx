
// import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// export default function Contact({ onDemoClick }) {
//   return (
//     <section id="contact" className="bg-slate-950 py-16 sm:py-28 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-12 lg:p-16">
//           <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
//             {/* Left */}
//             <div className="text-center lg:text-left">
//               <p className="text-sky-400 uppercase tracking-[0.25em] sm:tracking-[0.35em] font-semibold text-xs sm:text-sm">Contact Us</p>
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 leading-tight">
//                 Ready to Modernize
//                 <span className="text-sky-400"> Printing?</span>
//               </h2>
//               <p className="mt-6 sm:mt-8 text-slate-400 text-base sm:text-lg leading-7 sm:leading-8">
//                 Whether you&apos;re a college, office, hospital or public organization, SnapPrint can provide a fast
//                 and secure self-service printing solution.
//               </p>
//               <button
//                 onClick={onDemoClick}
//                 className="mt-8 sm:mt-10 flex items-center gap-3 rounded-xl bg-sky-500 px-6 sm:px-8 py-3.5 sm:py-4 font-semibold transition hover:bg-sky-400 mx-auto lg:mx-0"
//               >
//                 Request Demo
//                 <ArrowRight size={18} />
//               </button>
//             </div>

//             {/* Right */}
//             <div className="space-y-4 sm:space-y-8">
//               <div className="flex items-center gap-4 sm:gap-5 rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
//                 <Mail className="text-sky-400 shrink-0" size={22} />
//                 <div>
//                   <h4 className="font-semibold text-sm sm:text-base">Email</h4>
//                   <p className="text-slate-400 text-sm sm:text-base break-all">support.snapprints@gmail.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 sm:gap-5 rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
//                 <Phone className="text-sky-400 shrink-0" size={22} />
//                 <div>
//                   <h4 className="font-semibold text-sm sm:text-base">Phone</h4>
//                   <p className="text-slate-400 text-sm sm:text-base">+91 7798305769</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 sm:gap-5 rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6">
//                 <MapPin className="text-sky-400 shrink-0" size={22} />
//                 <div>
//                   <h4 className="font-semibold text-sm sm:text-base">Location</h4>
//                   <p className="text-slate-400 text-sm sm:text-base">Ahilyanagar, Maharashtra, India</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Contact({ onDemoClick }) {
  return (
    <section id="contact" className="bg-slate-950 py-16 sm:py-28 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
              {/* Left */}
              <div className="text-center lg:text-left">
                <p className="text-sky-400 uppercase tracking-[0.25em] sm:tracking-[0.35em] font-semibold text-xs sm:text-sm">Contact Us</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-5 leading-tight">
                  Ready to Modernize
                  <span className="text-sky-400"> Printing?</span>
                </h2>
                <p className="mt-6 sm:mt-8 text-slate-400 text-base sm:text-lg leading-7 sm:leading-8">
                  Whether you&apos;re a college, office, hospital or public organization, SnapPrints can provide a fast
                  and secure self-service printing solution.
                </p>
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onDemoClick}
                  className="mt-8 sm:mt-10 flex items-center gap-3 rounded-xl bg-sky-500 px-6 sm:px-8 py-3.5 sm:py-4 font-semibold transition-colors hover:bg-sky-400 mx-auto lg:mx-0"
                >
                  Request Demo
                  <ArrowRight size={18} />
                </motion.button>
              </div>

              {/* Right */}
              <div className="space-y-4 sm:space-y-8">
                {[
                  { Icon: Mail, label: "Email", value: "support.snapprints@gmail.com", breakAll: true },
                  { Icon: Phone, label: "Phone", value: "+91 7798305769" },
                  { Icon: MapPin, label: "Location", value: "Ahilyanagar, Maharashtra, India" },
                ].map(({ Icon, label, value, breakAll }, i) => (
                  <Reveal key={label} delay={i * 0.1} y={16}>
                    <motion.div
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex items-center gap-4 sm:gap-5 rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:p-6"
                    >
                      <Icon className="text-sky-400 shrink-0" size={22} />
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base">{label}</h4>
                        <p className={`text-slate-400 text-sm sm:text-base ${breakAll ? "break-all" : ""}`}>{value}</p>
                      </div>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
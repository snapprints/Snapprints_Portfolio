
// import { ShieldCheck, Smartphone, CreditCard, Clock3, Cloud, Printer } from "lucide-react";

// const features = [
//   { icon: ShieldCheck, title: "Secure Printing", description: "Your files are encrypted during upload and automatically deleted after printing." },
//   { icon: Smartphone, title: "Mobile Upload", description: "Simply scan the QR code and upload documents directly from your smartphone." },
//   { icon: CreditCard, title: "Digital Payments", description: "Pay instantly using UPI, Debit Card, Credit Card or Wallets." },
//   { icon: Printer, title: "Instant Printing", description: "Get high-quality prints within seconds without waiting in queues." },
//   { icon: Clock3, title: "24×7 Availability", description: "Print whenever you need, even outside regular shop working hours." },
//   { icon: Cloud, title: "Cloud Connected", description: "Machines stay connected for remote monitoring, updates and maintenance." },
// ];

// export default function Features() {
//   return (
//     <section id="features" className="bg-slate-950 py-16 sm:py-28 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="text-center mb-12 sm:mb-20">
//           <p className="text-sky-400 uppercase tracking-[0.25em] sm:tracking-[0.35em] font-semibold text-xs sm:text-sm">Features</p>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-5">Everything You Need in One Smart Kiosk</h2>
//           <p className="text-slate-400 max-w-3xl mx-auto mt-4 sm:mt-6 text-base sm:text-lg">
//             SnapPrint combines secure document handling, instant printing, digital payments and cloud connectivity
//             into one intelligent self-service solution.
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
//           {features.map((feature) => {
//             const Icon = feature.icon;
//             return (
//               <div
//                 key={feature.title}
//                 className="group rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/10"
//               >
//                 <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-sky-500/10 group-hover:bg-sky-500/20 transition">
//                   <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-sky-400" />
//                 </div>
//                 <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-semibold">{feature.title}</h3>
//                 <p className="mt-3 sm:mt-4 leading-6 sm:leading-7 text-slate-400 text-sm sm:text-base">{feature.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


import { ShieldCheck, Smartphone, CreditCard, Clock3, Cloud, Printer } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const features = [
  { icon: ShieldCheck, title: "Secure Printing", description: "Your files are encrypted during upload and automatically deleted after printing." },
  { icon: Smartphone, title: "Mobile Upload", description: "Simply scan the QR code and upload documents directly from your smartphone." },
  { icon: CreditCard, title: "Digital Payments", description: "Pay instantly using UPI, Debit Card, Credit Card or Wallets." },
  { icon: Printer, title: "Instant Printing", description: "Get high-quality prints within seconds without waiting in queues." },
  { icon: Clock3, title: "24×7 Availability", description: "Print whenever you need, even outside regular shop working hours." },
  { icon: Cloud, title: "Cloud Connected", description: "Machines stay connected for remote monitoring, updates and maintenance." },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-950 py-16 sm:py-28 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12 sm:mb-20">
          <p className="text-sky-400 uppercase tracking-[0.25em] sm:tracking-[0.35em] font-semibold text-xs sm:text-sm">Features</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-5">Everything You Need in One Smart Kiosk</h2>
          <p className="text-slate-400 max-w-3xl mx-auto mt-4 sm:mt-6 text-base sm:text-lg">
            Snapprints combines secure document handling, instant printing, digital payments and cloud connectivity
            into one intelligent self-service solution.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group h-full rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/10 transition-colors"
                >
                  <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-sky-500/10 group-hover:bg-sky-500/20 transition">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-sky-400" />
                  </div>
                  <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-semibold">{feature.title}</h3>
                  <p className="mt-3 sm:mt-4 leading-6 sm:leading-7 text-slate-400 text-sm sm:text-base">{feature.description}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
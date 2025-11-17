"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { Send, Hand, MessageCircle, Edit2, Pen, Code } from "lucide-react";

// ============================================================================
// HERO SECTION
// ============================================================================

// function HeroSection() {
//   const textVariant: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" as const },
//     },
//   };

//   const buttonVariant: Variants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.5 },
//     },
//   };

//   const imageVariant: Variants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 1, ease: "easeOut" as const },
//     },
//   };

//   return (
//     <div className="relative w-full bg-[#030C32] overflow-hidden">
//       {/* Background Decorative Image */}
//       <div className="fixed -top-60 -left-32 w-[450px] h-[350px] opacity-40
//                       sm:h-[1000px] sm:w-[1000px] sm:-top-10 sm:-left-80
//                       lg:w-[900px] lg:h-[900px] lg:-top-40 lg:-left-70
//                       pointer-events-none z-0 
//                       2xl:-top-60 2xl:-left-110 2xl:w-[1400px] 2xl:h-[1300px]">
//         <Image
//           src="/waves.svg"
//           alt="Decorative background"
//           width={800}
//           height={800}
//           className="w-full h-full object-contain z-[99]"
//           priority
//         />
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-20">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-32 pb-20">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* LEFT SIDE CONTENT */}
//             <motion.div
//               className="space-y-6 h-full"
//               initial="hidden"
//               animate="visible"
//               variants={textVariant}
//             >
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
//                 One Card.
//                 <br />
//                 <span className="text-[#113CFC]">Endless</span>
//                 <br />
//                 <span className="text-[#113CFC]">Possibilities</span>
//               </h1>

//               <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-md">
//                 Create, share, and manage your digital identity — built for
//                 professionals, teams, and institutions.
//               </p>

//               {/* Buttons */}
//               <motion.div
//                 className="flex flex-col sm:flex-row gap-4 pt-2"
//                 initial="hidden"
//                 animate="visible"
//                 variants={buttonVariant}
//               >
//                 <Link href="/contact">
//                   <Button
//                     style={{ paddingTop: "25px", paddingBottom: "25px" }}
//                     className="bg-[#113CFC] hover:bg-[#0E33E0] text-white w-full sm:w-auto px-8 py-3 text-base font-medium rounded-lg shadow-lg transition-all duration-300"
//                   >
//                     Get Started
//                   </Button>
//                 </Link>

//                 <Link href="/how-it-works">
//                   <Button
//                     style={{ paddingTop: "25px", paddingBottom: "25px" }}
//                     variant="outline"
//                     className="w-full sm:w-auto px-8 text-base font-medium
//                                text-white border-2 border-[#113CFC] bg-transparent
//                                hover:bg-[#113CFC] hover:text-white transition-all duration-300 rounded-lg"
//                   >
//                     See How It Works
//                   </Button>
//                 </Link>
//               </motion.div>
//             </motion.div>

//             {/* RIGHT SIDE IMAGE */}
//             <motion.div
//               className="flex justify-center lg:justify-end"
//               initial="hidden"
//               animate="visible"
//               variants={imageVariant}
//             >
//               <Image
//                 src="/both.svg"
//                 alt="Cards Graphic"
//                 width={800}
//                 height={800}
//                 className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
//                 priority
//               />
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// ============================================================================
// CLIENTS SECTION
// ============================================================================

const clients = [
  { name: "Revolut", logo: "/revolut-logo.svg" },
  { name: "NorthOne", logo: "/northone-logo.svg" },
  { name: "Checkout.com", logo: "/checkout-logo.svg" },
];

function ClientsSection() {
  return (
    <div 
    style={{
    background: `radial-gradient(
      circle at center,
      #030C32 0%,   /* center */
      
      #1f2749 70%,  /* outer mid */
      #030C32 100%  /* edge */
    )`,
  }}
    className="relative w-full py-20 overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#113CFC]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#113CFC]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm  tracking-wider mb-2">
           Clients Include
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-medium text-white">
            {/* Organizations &<br /> */}
            <span className="text-white">Our trusted Organizations and Universities</span>
          </h2>
        </motion.div>

        {/* Clients Logo Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-center max-w-3xl mx-auto border-t border-b p-5 py-8 border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={180}
                height={80}
                className="object-contain filter brightness-100 hover:brightness-125 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="mt-16 border-t border-[#113CFC]/20"></div>
      </div>
    </div>
  );
}

// ============================================================================
// FEATURES SECTION
// ============================================================================

const features = [
  {
    title: "Powerful Features",
    description: "Get started using a completely digital on-boarding process",
    icon: "💎",
    hasImage: false,
  },
  {
    title: "Seamless onboarding",
    description: "Get started using a completely digital on-boarding process, and activate your OneCard in less than 5 minutes.",
    icon: "⚡",
    image: "/onboarding-screen.svg",
    hasImage: true,
  },
];

function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-[#030C32] via-[#0a1a4d] to-[#051445] py-20 overflow-hidden">
      {/* Gradient orbs for visual interest */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#113CFC]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#113CFC]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* First Card - Powerful Features */}
          <motion.div
            variants={itemVariants}
            className="group relative p-8 rounded-2xl border border-[#113CFC]/30 bg-gradient-to-br from-[#0a1a4d]/40 to-[#051445]/20 backdrop-blur-md hover:border-[#113CFC]/60 transition-all duration-300"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#113CFC]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-20">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#113CFC] to-[#0E33E0] flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#113CFC]/50 transition-all duration-300">
                <span className="text-2xl">{features[0].icon}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{features[0].title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {features[0].description}
              </p>
            </div>
          </motion.div>

          {/* Second Card - Seamless Onboarding */}
          <motion.div
            variants={itemVariants}
            className="group relative p-8 rounded-2xl border border-[#113CFC]/30 bg-gradient-to-br from-[#0a1a4d]/40 to-[#051445]/20 backdrop-blur-md hover:border-[#113CFC]/60 transition-all duration-300 overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#113CFC]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-20 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-white mb-3">{features[1].title}</h3>
              <p className="text-gray-400 leading-relaxed flex-grow">
                {features[1].description}
              </p>

              {/* Image */}
              <motion.div
                className="mt-8 flex justify-end"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Image
                  src={"/whitecard.svg"}
                  alt="Onboarding Screen"
                  width={200}
                  height={250}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// ============================================================================
// NETWORKING SECTION
// ============================================================================

function NetworkingSection() {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#051445] via-[#030C32] to-[#020824] py-20 overflow-hidden">
      {/* Decorative gradient elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#113CFC]/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#113CFC]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Networking
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed max-w-md">
              Share <span className="text-[#113CFC] font-semibold">SYNC</span> with new people. They get their own co-branded OneCard with separate offers while you keep track and control.
            </p>

            {/* Decorative dots or accent */}
            <div className="pt-4 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#113CFC]"></div>
              <div className="w-2 h-2 rounded-full bg-[#113CFC]/50"></div>
              <div className="w-2 h-2 rounded-full bg-[#113CFC]/25"></div>
            </div>
          </motion.div>

          {/* Right - Layered Cards Image */}
          <motion.div
            className="flex justify-center lg:justify-end relative h-96"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Card Stack Animation */}
            <motion.div
              className="absolute w-64 h-80"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#F5E6D3] to-[#E8DCC8] shadow-2xl transform rotate-6 translate-x-8 translate-y-8">
                <Image
                  src="/card-beige.svg"
                  alt="Beige Card"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#113CFC] to-[#0E33E0] shadow-2xl transform -rotate-3 translate-x-4">
                <Image
                  src="/card-blue.svg"
                  alt="Blue Card"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] shadow-2xl transform -rotate-12 -translate-x-4 -translate-y-4">
                <Image
                  src="/card-black.svg"
                  alt="Black Card"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// CTA SECTION
// ============================================================================

const actions = [
  {
    icon: Send,
    label: "Send",
    color: "from-[#113CFC] to-[#0E33E0]",
  },
  {
    icon: Hand,
    label: "Interact",
    color: "from-gray-600 to-gray-700",
  },
  {
    icon: MessageCircle,
    label: "Message",
    color: "from-gray-600 to-gray-700",
  },
  {
    icon: Edit2,
    label: "Edit",
    color: "from-[#113CFC] to-[#0E33E0]",
    isPrimary: true,
  },
  {
    icon: Pen,
    label: "Annotate",
    color: "from-gray-600 to-gray-700",
  },
  {
    icon: Code,
    label: "Code",
    color: "from-gray-600 to-gray-700",
  },
];

function CTASection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-[#020824] via-[#030C32] to-[#030C32] py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#113CFC]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Powerful tools and features built right into your card
          </p>
        </motion.div>

        {/* Action Buttons Grid */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 px-4 py-8 rounded-2xl bg-gradient-to-r from-gray-900/20 to-gray-800/20 border border-gray-700/30 backdrop-blur-lg max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {actions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <motion.div key={action.label} variants={itemVariants}>
                <motion.button
                  className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-300 group ${
                    action.isPrimary
                      ? `bg-gradient-to-r ${action.color} text-white hover:shadow-lg hover:shadow-[#113CFC]/50`
                      : "bg-gray-700/50 text-gray-300 hover:bg-gray-700/80"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="text-sm sm:inline hidden">{action.label}</span>
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Secondary CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">
            Ready to get started with your digital card?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gradient-to-r from-[#113CFC] to-[#0E33E0] hover:shadow-lg hover:shadow-[#113CFC]/50 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Get Started Today
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN EXPORT - COMBINED PAGE
// ============================================================================

export default function LandingPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* <HeroSection /> */}
      <ClientsSection />
      <FeaturesSection />
      <NetworkingSection />
      <CTASection />
    </main>
  );
}

// ============================================================================
// EXPORTS FOR INDIVIDUAL USE (IF NEEDED)
// ============================================================================

export {
//   HeroSection,
  ClientsSection,
  FeaturesSection,
  NetworkingSection,
  CTASection,
};
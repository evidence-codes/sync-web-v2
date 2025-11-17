"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";


const clients = [
  { name: "Revolut", logo: "/revolut-logo.svg" },
  { name: "NorthOne", logo: "/northone-logo.svg" },
  { name: "Checkout.com", logo: "/checkout-logo.svg" },
];

function ClientsSection() {
  return (
    <div
      className="relative w-full py-20 overflow-hidden"
      style={{
        background: "#030C32",
      }}
    >
      {/* SUBTLE ORGANIC BLOB GLOW */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Layer 1: The focused, brighter white glow (Shifted up to overlap Hero glow) */}
        <div
          className="
            absolute -top-10 left-1/3 // 🔑 Shifted up to -top-10
            w-[800px] h-[600px] 
            bg-white/15 
            blur-[200px]
            mix-blend-screen
            rounded-[40%_60%_50%_70%/60%_40%_70%_50%]
          "
        />

        {/* Layer 2: Large, Subtle White Spread (Increased size) */}
        <div
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[1200px] h-[1000px] 
            bg-white/3 
            blur-[350px] 
            mix-blend-screen
            rounded-full 
          "
        />

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
          <p className="text-gray-300 text-sm tracking-wider mb-2">
            Clients Include
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-medium text-white">
            <span>Our trusted Organizations and Universities</span>
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
        <div className="mt-16 border-t border-[#ffffff22]"></div>
      </div>
    </div>
  );
}

export default ClientsSection;
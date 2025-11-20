"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import Button from "@/components/custom/button";
// --------------------------------------------------------------------------

// 🔑 TypeScript Interface for Client Data
interface Client {
  name: string;
  logo: string;
}

// Client data
const clients: Client[] = [
  // ... (clients data is not directly used in the feature cards, but kept for context if needed elsewhere)
];

// Reusable Logo Component
const LogoItem = ({ client }: { client: Client }) => (
  // ... (LogoItem component is not used in the feature cards)
  <div className="flex items-center justify-center w-full md:w-1/2 lg:w-1/3  mx-5 px-16 lg:px-6">
    <Image
      src={client.logo}
      alt={client.name}
      width={180}
      height={80}
      className="object-contain filter brightness-100 hover:brightness-125 transition-all duration-300 h-full max-w-40 lg:max-w-[400px] w-[200px]"
    />
  </div>
);

// --- NEW VARIANT FOR FEATURE CARDS (REQUIRED FOR THE SECTION) ---
const cardVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2, // Stagger effect
            duration: 0.8,
            ease: "easeOut" as const,
        },
    }),
};


export default function FeaturesSection() {
  // State and effects are removed as they are not relevant to the card section logic
  const itemsPerView = 3; // Placeholder, not used
  const duplicatedClients = []; // Placeholder, not used
  const SCROLL_DURATION = "0s"; // Placeholder, not used
  const trackWidth = "w-full"; // Placeholder, not used
  const isImageVisible = false; // Placeholder, not used

  // Animation variants (kept for structure if needed, but not used by the feature cards section)
  const textVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const buttonVariant: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.5 },
    },
  };

  const imageVariant: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" as const },
    },
  };

  return (
    // The main container structure is kept to provide the necessary context for the cards
    // The background style is crucial for the dark theme.
    <div
      className="relative w-full overflow-hidden"
      style={{
        background: '#030C32',
      }}
    >

      {/* Glow System, Hero Content, and Clients Content are removed */}

      {/* ==================================================
        NEW: FEATURE CARDS SECTION - UNIFORM HEIGHTS
        ==================================================
      */}
      <div className="relative z-20 w-full pt-10 pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
                // Use a main 3-column grid (lg:grid-cols-3)
                // Grid parent ensures children (Card 1 & Card 2) match height
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* CARD 1: Powerful Features (1/3 width) - UNIFORM HEIGHT */}
                <motion.div
                    // UPDATED: Background to #030C32 and added subtle border
                    className="p-8 rounded-xl bg-[#030C32] border border-white/10 shadow-2xl h-full lg:h-[400px] col-span-1 md:col-span-2 lg:col-span-1 overflow-hidden flex flex-col"
                    variants={cardVariant}
                    custom={0} // Stagger index 0
                >
                    {/* h-full and flex-grow ensure content fills the height */}
                    <div className="flex flex-col space-y-4 justify-center items-center h-full flex-grow">
                        <h3 className="text-4xl font-bold text-white text-center gap-2">Powerful <br /> Features</h3>
                        <Image
                            src="/call-icon.svg"
                            className="object-contain text-center"
                            alt="Company Logo"
                            width={60}
                            height={60}
                        />
                    </div>
                </motion.div>
                
                {/* CARD 2: Seamless Onboarding (2/3 width) - UNIFORM HEIGHT & RESPONSIVE IMAGE */}
                <motion.div
                    // UPDATED: Background to #030C32 and added subtle border
                    className="relative p-8 rounded-xl bg-[#030C32] border border-white/10 shadow-2xl h-full lg:h-[400px] col-span-1 md:col-span-2 lg:col-span-2 overflow-hidden flex flex-col justify-between"
                    variants={cardVariant}
                    custom={1} // Stagger index 1
                >
                    {/* TOP RIGHT CORNER GLOW (White) */}
                    <div 
                        className="absolute hidden lg:block -top-32 -right-32 w-64 h-64 bg-white/10 blur-[150px] rounded-full z-0"
                    ></div>

                    {/* SEMI-CIRCLE ABOVE IMAGE (Desktop Only) - WHITE AMBIENT GLOW */}
                    <div 
                        className="absolute hidden lg:block -top-10 right-[8%] w-64 h-32 bg-white/10 rounded-b-full  z-20"
                    ></div>

                    {/* Content on the left, Image on the right (internal flex) */}
                    <div className="flex flex-col lg:flex-row justify-between h-full">
                        
                        {/* TEXT CONTENT (Left side) */}
                        <div className="lg:w-1/2 mb-6 lg:mb-0 pt-4 relative z-30 flex flex-col justify-center">
                            <h3 className="text-4xl font-bold text-white mb-4">Seamless <br /> onboarding</h3>
                            <p className="text-lg text-gray-300 max-w-lg">
                             Get started using a completely digital on-boarding process, and activate your OneCard in less than 5 minutes.
                            </p>
                        </div>
                        
                        {/* IMAGE CONTAINER (Right side) */}
                        <div className="lg:w-1/2 flex justify-center items-center relative z-10 w-full h-full">
                            
                            {/* IMAGE GLOW EFFECT (Desktop Only) - Kept BLUE for contrast with the phone/app */}
                            <div
                                className="absolute hidden lg:block w-48 h-48 bg-[#113CFC] opacity-30 rounded-full blur-[100px] z-0"
                                style={{ transform: 'translateY(-10%)' }} // Adjust position slightly for better visual alignment
                            ></div>

                            {/* Desktop Phone Image: ABSOLUTE/CLIPPED (Hidden on Mobile) */}
                            <Image
                                src="/phone.svg"
                                alt="Seamless onboarding sign-up screen"
                                width={350} 
                                height={700}
                                // CRUCIAL: absolute, top/right adjusted for the 400px card height
                                className="object-contain w-auto h-auto absolute lg:top-[-40px] lg:right-[-20px] lg:w-[350px] lg:h-[700px] lg:block hidden z-10" // Added z-10 to ensure it's above the glow
                            />
                            
                            {/* Mobile Phone Image: RESPONSIVE/FULLY VISIBLE (Hidden on Desktop) */}
                            <Image
                                src="/phone.svg" 
                                alt="Seamless onboarding sign-up screen"
                                width={180} // Smaller base dimensions for mobile
                                height={360}
                                // CRUCIAL: block lg:hidden for mobile-only. max-w-[200px] max-h-[250px] to constrain size.
                                className="object-contain block lg:hidden mt-8 mx-auto w-full max-w-[200px] max-h-[250px]"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* CARD 3: Networking (Full width, spanning 3 columns) - UNIFORM HEIGHT */}
                <motion.div
                    // UPDATED: Background to #030C32 and added subtle border
                    className="p-8 rounded-xl bg-[#030C32] border border-white/10 shadow-2xl h-full lg:h-[400px] col-span-1 md:col-span-2 lg:col-span-3 overflow-hidden"
                    variants={cardVariant}
                    custom={2} // Stagger index 2
                >
                    <div className="flex flex-col lg:flex-row justify-between items-center h-full">
                        <div className="lg:w-1/2">
                            <h3 className="text-4xl font-bold text-white mb-4">Networking</h3>
                            <p className="text-lg text-gray-300 max-w-lg">
                                Share SYNC with new people. They get their own co-branded OneCard with separate offers while you keep track and control.
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
                            <Image
                                src="/3-cards.svg" // Placeholder - Replace with your actual image path
                                alt="Stacked OneCard designs"
                                width={400}
                                height={300}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </div>
      </div>
      
    </div>
  );
}
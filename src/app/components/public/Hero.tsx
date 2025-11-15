"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

export default function HeroSection() {
  // Animation variants
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
    <div className="relative w-full bg-[#030C32] overflow-hidden">
      {/* Background Decorative Image */}
      <div className="fixed -top-60 -left-32 w-[450px] h-[350px] opacity-40
                      sm:h-[1000px] sm:w-[1000px] sm:-top-10 sm:-left-80
                      lg:w-[900px] lg:h-[900px] lg:-top-40 lg:-left-70
                      pointer-events-none z-0 
                      2xl:-top-60 2xl:-left-110 2xl:w-[1400px] 2xl:h-[1300px]">
        <Image
          src="/waves.svg"
          alt="Decorative background"
          width={800}
          height={800}
          className="w-full h-full object-contain z-[99]"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE CONTENT */}
            <motion.div
              className="space-y-6 h-full"
              initial="hidden"
              animate="visible"
              variants={textVariant}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                One Card.
                <br />
                <span className="text-[#113CFC]">Endless</span>
                <br />
                <span className="text-[#113CFC]">Possibilities</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-md">
                Create, share, and manage your digital identity — built for
                professionals, teams, and institutions.
              </p>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-2"
                initial="hidden"
                animate="visible"
                variants={buttonVariant}
              >
                <Link href="/contact">
                  <Button
                    style={{ paddingTop: "25px", paddingBottom: "25px" }}
                    className="bg-[#113CFC] hover:bg-[#0E33E0] text-white w-full sm:w-auto px-8 py-3 text-base font-medium rounded-lg shadow-lg transition-all duration-300"
                  >
                    Get Started
                  </Button>
                </Link>

                <Link href="/how-it-works">
                  <Button
                    style={{ paddingTop: "25px", paddingBottom: "25px" }}
                    variant="outline"
                    className="w-full sm:w-auto px-8 text-base font-medium
                               text-white border-2 border-[#113CFC] bg-transparent
                               hover:bg-[#113CFC] hover:text-white transition-all duration-300 rounded-lg"
                  >
                    See How It Works
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE IMAGE */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial="hidden"
              animate="visible"
              variants={imageVariant}
            >
              <Image
                src="/both.svg"
                alt="Cards Graphic"
                width={800}
                height={800}
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

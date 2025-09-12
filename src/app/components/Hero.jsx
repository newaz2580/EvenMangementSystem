"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/LDfTrYtZ/mesut-kaya-e-Ocyhe5-9s-Q-unsplash.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-white max-w-3xl px-4"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          Discover & Manage Amazing <span className="text-indigo-400">Events</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-200">
          Join concerts, workshops, or conferences — all in one place.  
          Create, promote, and experience unforgettable events.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
            Create Event
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
            Browse Events
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

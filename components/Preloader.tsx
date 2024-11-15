"use client"; // Ensure this file is a client-side component

import { useState, useEffect } from "react";

// List of background images for the preloader
const backgroundImages = [
  '/background-image1.jpg', // Replace with actual image paths
];

const greetings = [
  "Hello",       // English
  "Hola",        // Spanish
  "Bonjour",     // French
  "Hallo",       // German
  "Ciao",        // Italian
  "Olá",         // Portuguese
  "नमस्ते",      // Hindi
  "こんにちは",    // Japanese
  "안녕하세요",   // Korean
  "你好",         // Chinese
];

const Preloader: React.FC<{ onLoadComplete: () => void }> = ({ onLoadComplete }) => {
  const [greeting, setGreeting] = useState<string>(greetings[0]);
  const [bgImage, setBgImage] = useState<string>(backgroundImages[0]);

  useEffect(() => {
    // Interval to randomly pick a new background image
    const bgImageInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * backgroundImages.length);
      setBgImage(backgroundImages[randomIndex]);
    }, 3000); // Change background every 3 seconds

    // Randomly pick greeting from the list
    const greetingInterval = setInterval(() => {
      const greetingIndex = Math.floor(Math.random() * greetings.length);
      setGreeting(greetings[greetingIndex]);
    }, 300); // Change greeting text every 300ms

    // Simulate loading completion after a certain period
    const loadingTimeout = setTimeout(() => {
      onLoadComplete();
    }, 5000); // Complete loading after 5 seconds

    // Cleanup intervals on unmount
    return () => {
      clearInterval(bgImageInterval);
      clearInterval(greetingInterval);
      clearTimeout(loadingTimeout);
    };
  }, [onLoadComplete]);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-black text-black relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col items-center space-y-6 p-6">
        {/* Spinner */}
        <div className="border-8 border-t-transparent border-white w-24 h-24 rounded-full animate-spin mb-6"></div>

        {/* Greeting Text */}
        <div className="text-3xl font-semibold opacity-90 transition-opacity duration-700">{greeting}</div>

        {/* Animated dots */}
        <div className="text-4xl flex space-x-2 animate-pulse">
          <span className="opacity-70">.</span>
          <span className="opacity-70">.</span>
          <span className="opacity-70">.</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

"use client";

import { useState } from 'react';
import Preloader from '../components/Preloader';
import Header from '@/components/Header';
import StarsBackground from '@/components/StarsBackground';
import Link from 'next/link';

const Home: React.FC = () => {
  const [showMain, setShowMain] = useState<boolean>(false);

  const handleLoadComplete = () => {
    setShowMain(true);
  };

  return (
    <>
      {!showMain ? (
        <Preloader onLoadComplete={handleLoadComplete} />
      ) : (
        <>
          <Header />
          <main className="min-h-screen text-gray-800 relative overflow-hidden bg-black">
            <StarsBackground />

            {/* Hero Section with Gradient Overlay */}
            <div className="flex items-center justify-center min-h-screen relative z-10">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 z-0"></div>

              {/* Transparent card with subtle blur effect and rounded corners */}
              <div className="bg-transparent backdrop-blur-lg p-10 rounded-3xl shadow-2xl max-w-xl mx-auto relative z-10">
                <div className="text-center space-y-6">
                  {/* Hola text with "o" containing an image */}
                  <h1 className="text-6xl font-bold text-white hola-text">
                    H<span className="hola-o">o</span>la
                  </h1>

                  <p className="text-lg text-white mt-4">
                    I'm a passionate web developer creating innovative and seamless user experiences.
                  </p>

                  {/* About Button using Next Link */}
                  <div>
                    <Link
                      href="/about"
                      className="inline-block mt-6 px-6 py-3 bg-white text-gray-800 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
                    >
                      About Me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Home;

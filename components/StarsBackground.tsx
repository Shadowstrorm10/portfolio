"use client";

import React, { useEffect } from 'react';

const StarsBackground = () => {
  useEffect(() => {
    const starContainer = document.querySelector('.stars') as HTMLElement;

    // Number of stars
    const starCount = 200;

    // Create stars dynamically
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star', 'star-glow');

      // Randomize position and animation delay
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const animationDuration = Math.random() * (2 - 1) + 1; // Random between 1s and 2s

      star.style.left = `${x}vw`;
      star.style.top = `${y}vh`;
      star.style.animationDuration = `${animationDuration}s`;

      starContainer.appendChild(star);
    }
  }, []);

  return <div className="stars"></div>;
};

export default StarsBackground;

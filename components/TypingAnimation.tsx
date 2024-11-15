"use client";

import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  words: string[];
  typingSpeed?: number;
  delayBetweenWords?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  words,
  typingSpeed = 150,
  delayBetweenWords = 1000
}) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    let textIndex = 0;
    const word = words[wordIndex];
    
    const type = () => {
      if (!isTyping && textIndex < word.length) {
        setIsTyping(true);
        setCurrentText((prev) => prev + word.charAt(textIndex));
        textIndex++;
        setTimeout(type, typingSpeed);
      } else if (textIndex === word.length) {
        setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            textIndex = 0;
            setCurrentText("");
            setWordIndex((prev) => (prev + 1) % words.length);
          }, delayBetweenWords);
        }, delayBetweenWords);
      }
    };

    type();
  }, [isTyping, words, wordIndex, typingSpeed, delayBetweenWords]);

  return <span className="block text-6xl font-bold text-white">{currentText}</span>;
};

export default TypingAnimation;

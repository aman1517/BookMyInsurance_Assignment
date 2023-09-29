import React, { useState, useEffect } from "react";

const TypingAnimation = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prevText) => {
        if (currentIndex === text.length) {
          clearInterval(intervalId);
          // Animation complete
        } else {
          currentIndex += 1;
        }
        return text.slice(0, currentIndex);
      });
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <h2 className="text-white">{displayedText}</h2>;
};

export default TypingAnimation;

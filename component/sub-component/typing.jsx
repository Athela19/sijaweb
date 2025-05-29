import { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 200 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Efek untuk kursor berkedip
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500); // Kedip setiap 500ms

    return () => clearInterval(cursorInterval);
  }, []);

  // Efek untuk mengetik
  useEffect(() => {
    if (displayedText.length < text.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(typingTimeout);
    }
  }, [displayedText, text, speed]);

  return (
    <span>
      {displayedText}
      <span 
        className={`cursor ${showCursor ? 'opacity-100' : 'opacity-0'}`}
        style={{ borderRight: '2px solid currentColor' }}
      >
        &nbsp;
      </span>
    </span>
  );
};

export default TypingEffect;
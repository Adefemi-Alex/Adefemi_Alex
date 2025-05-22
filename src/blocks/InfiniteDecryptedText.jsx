import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function InfiniteDecryptedText({
  text,
  speed = 50,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(shuffleText());
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  const shuffleText = () => {
    return text.split('').map((char) => {
      if (char === ' ') return ' ';
      return characters[Math.floor(Math.random() * characters.length)];
    }).join('');
  };

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap ${parentClassName}`}
      {...props}
    >
      <span className="sr-only">{displayText}</span>
      <span aria-hidden="true">
        {displayText.split('').map((char, index) => (
          <span key={index} className={className}>
            {char}
          </span>
        ))}
      </span>
    </motion.span>
  );
}
import React, { useEffect, useRef } from 'react';
import './Confetti.css';

const ConfettiComponent = () => {
  const confettiContainerRef = useRef();

  useEffect(() => {
    const container = confettiContainerRef.current;

    // Generate multiple confetti pieces
    const numOfConfetti = 50;
    for (let i = 0; i < numOfConfetti; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti-piece');
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.backgroundColor = getRandomColor();
      confetti.style.animationDelay = `${Math.random() * 2}s`;
      confetti.style.animationDuration = `${2 + Math.random() * 3}s`;
      
      container.appendChild(confetti);
    }

    // Start animation on mount
    const confettiPieces = container.querySelectorAll('.confetti-piece');
    confettiPieces.forEach(piece => piece.style.animationPlayState = 'running');

    // Clean up after animation completes
    return () => {
      container.innerHTML = '';
    };
  }, []);

  const getRandomColor = () => {
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return <div ref={confettiContainerRef} ></div>;
};

export default ConfettiComponent;

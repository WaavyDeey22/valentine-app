import { useEffect, useState } from 'react';

function ConfettiCelebration() {
  const [confettiPieces, setConfettiPieces] = useState([]);

  useEffect(() => {
    const emojis = ['💕', '💖', '💗', '💓', '💝', '🎉', '✨', '💘', '🌹', '😍'];
    const pieces = [];

    // Create 50 confetti pieces
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const newPiece = {
          id: Date.now() + i,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
          left: Math.random() * 100,
          top: Math.random() * 100,
        };
        
        setConfettiPieces((prev) => [...prev, newPiece]);

        // Remove after animation
        setTimeout(() => {
          setConfettiPieces((prev) => prev.filter((p) => p.id !== newPiece.id));
        }, 2000);
      }, i * 50);
    }
  }, []);

  return (
    <>
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="celebration"
          style={{
            left: `${piece.left}%`,
            top: `${piece.top}%`,
          }}
        >
          {piece.emoji}
        </div>
      ))}
    </>
  );
}

export default ConfettiCelebration;

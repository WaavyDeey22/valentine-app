import { useEffect, useState } from 'react';
import '../styles/FloatingHearts.css';

function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate 20 hearts with random properties
    const newHearts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: Math.random() * 4 + 6,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="hearts-bg">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export default FloatingHearts;

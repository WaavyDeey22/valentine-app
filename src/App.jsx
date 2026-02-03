import { useState } from 'react';
import Minion from './components/Minion';
import FloatingHearts from './components/FloatingHearts';
import ConfettiCelebration from './components/ConfettiCelebration';
import SpotifyPlayer from './components/SpotifyPlayer';
import './styles/App.css';

function App() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [showResponse, setShowResponse] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [isAccepted, setIsAccepted] = useState(false);
  const [yesBtnSize, setYesBtnSize] = useState(1);
  const [noBtnSize, setNoBtnSize] = useState(1);
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [noBtnOpacity, setNoBtnOpacity] = useState(1);
  const [showCelebration, setShowCelebration] = useState(false);

  const noMessages = [
    "Are you sure? 🥺",
    "Think again! 💔",
    "Please? 🙏",
    "Don't break my heart! 😢",
    "One more chance! 💭",
    "Really?? 🥺",
    "I'm begging you! 😭",
    "Just say YES! 💕"
  ];

  const handleYes = () => {
    setIsAccepted(true);
    setShowResponse(true);
    setShowCelebration(true);
  };

  const handleNo = (e) => {
    e.preventDefault();
    const newCount = noClickCount + 1;
    setNoClickCount(newCount);

    setResponseMessage(noMessages[Math.min(newCount - 1, noMessages.length - 1)]);
    setShowResponse(true);

    setYesBtnSize(prev => prev * 1.25);
    setNoBtnSize(prev => Math.max(0.3, prev * 0.8));

    const randomX = (Math.random() - 0.5) * 150;
    const randomY = (Math.random() - 0.5) * 100;
    setNoBtnPosition({ x: randomX, y: randomY });

    if (newCount >= 6) {
      const fadeAmount = Math.min(1, (newCount - 5) * 0.2);
      setNoBtnOpacity(Math.max(0, 1 - fadeAmount));
    }

    if (newCount >= 10) {
      setTimeout(() => {
        handleYes();
      }, 1000);
    }
  };

  const handleNoHover = () => {
    if (noClickCount >= 3) {
      const randomX = (Math.random() - 0.5) * 200;
      const randomY = (Math.random() - 0.5) * 120;
      setNoBtnPosition({ x: randomX, y: randomY });
    }
  };

  return (
    <div className="app">
      <FloatingHearts />

      <div className="container">
        <Minion />

        <h1 className="title">
          Hey <span className="name">Bethel</span>, would you be my Valentine? 💝
        </h1>

        <p className="message">
          You make every day brighter, and I'd be the happiest person if you'd be my Valentine!
          What do you say? 🥰
        </p>

        {!isAccepted && (
          <div className="buttons">
            <button
              className="yes-btn"
              onClick={handleYes}
              style={{
                fontSize: `${yesBtnSize}em`,
                padding: `${yesBtnSize * 0.8}em ${yesBtnSize * 1.2}em`,
              }}
            >
              YES! 💕
            </button>

            <button
              className="no-btn"
              onClick={handleNo}
              onMouseEnter={handleNoHover}
              style={{
                fontSize: `${noBtnSize}em`,
                padding: `${noBtnSize * 0.8}em ${noBtnSize * 1.2}em`,
                transform: `translate(${noBtnPosition.x}px, ${noBtnPosition.y}px)`,
                opacity: noBtnOpacity,
                pointerEvents: noBtnOpacity < 0.1 ? 'none' : 'auto',
              }}
            >
              No...
            </button>
          </div>
        )}

        {showResponse && (
          <div className={`response ${isAccepted ? 'accepted' : 'pleading'}`}>
            {isAccepted ? (
              <>
                <div className="acceptance-message">
                  ✨ Of course you would!! ✨
                </div>
                <div className="emoji-row">
                  💖🌹😍🎉💕🥰💝✨🌸💘
                </div>

                {/* 🎵 Spotify player appears ONLY after YES */}
                <SpotifyPlayer />
              </>
            ) : (
              responseMessage
            )}
          </div>
        )}
      </div>

      {showCelebration && <ConfettiCelebration />}
    </div>
  );
}

export default App;

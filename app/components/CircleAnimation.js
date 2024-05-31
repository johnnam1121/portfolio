import { useState, useEffect } from 'react';
import '../components/Circles.css';
import popSound from '../assets/popSound.wav';

const Circle = ({ updateScore }) => {
  const [animation, setAnimation] = useState('animate 8s linear infinite');
  const [leftPosition, setLeftPosition] = useState(`${Math.floor(Math.random() * 100)}%`);
  const [delay, setDelay] = useState(`${Math.floor(Math.random() * 20)}s`);
  const audio = new Audio(popSound);
  audio.volume = 0.05;

  const [audioError, setAudioError] = useState(false);

  const handleMouseOver = () => {
    audio.currentTime = 0;
    audio.play();
    setAnimation('move-away 1s linear forwards');
    updateScore(); // Update score in parent component
  };

  const handleMouseOut = () => {
    setAnimation('animate 10s linear infinite');
  };

  useEffect(() => {
    audio.onerror = () => {
      setAudioError(true);
    };

    const randomDelay = `${Math.floor(Math.random() * 10)}s`;
    setDelay(randomDelay);
  }, []);

  return (
    <div>
      <li
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="circle"
        style={{ animation, left: leftPosition, animationDelay: delay }}
      />
    </div>
  );
};

const CircleAnimation = ({ repeat, updateScore }) => {
  return (
    <div>
      <ul className="circles">
        {Array.from({ length: repeat }, (_, index) => (
          <Circle key={index} updateScore={updateScore} />
        ))}
      </ul>
    </div>
  );
};

export default CircleAnimation;

import { useState, useEffect } from 'react';
import '../components/Circles.css'
import popSound from '../assets/popSound.wav'

const CircleAnimation = ({ repeat }) => {
  const Circles = () => {
    const [animation, setAnimation] = useState('animate 8s linear infinite');
    const [leftPosition, setLeftPosition] = useState(`${Math.floor(Math.random() * 100)}%`);
    const [delay, setDelay] = useState(`${Math.floor(Math.random() * 20)}s`);
    const audio = new Audio(popSound);
    audio.volume = 0.05;

    const [audioError, setAudioError] = useState(false);

    const [score, setScore] = useState(0);

    const handleMouseOver = () => {
      audio.currentTime = 0;
      audio.play();
      setAnimation('move-away 1s linear forwards');
      setScore(score + 1);
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
      <li
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="circle"
        style={{ animation, left: leftPosition, animationDelay: delay }}
      />
    );
  };

  return (
    <div>
      <ul className="circles">
        {Array.from({ length: repeat }, (_, index) => (
          <Circles key={index} />
        ))}
      </ul>
      <div style={{ position: 'fixed', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
        Score: {props.score}
      </div> {/* Display the score at the bottom */}
    </div>
  );
};

export default CircleAnimation;

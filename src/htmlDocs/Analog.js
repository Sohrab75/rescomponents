import React, { useEffect, useState } from 'react'
import AnalogStyled from './AnalogStyled'
import clockImage from "../images/clock-img.png"


const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

function playTickSound() {
  const oscillator = audioContext.createOscillator();
  oscillator.type = 'sawtooth';
  oscillator.frequency.setValueAtTime(1000, audioContext.currentTime); // Adjust frequency for the tick sound

  const gainNode = audioContext.createGain();
  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.5); // Adjust duration of the tick sound
}

const Analog = () => {
    const getCurrentTime = () => {
        const now = new Date();
        return {
          hours: now.getHours(),
          minutes: now.getMinutes(),
          seconds: now.getSeconds(),
        };
      };
    
      const [time, setTime] = useState(getCurrentTime());
    
      useEffect(() => {
        const interval = setInterval(() => {
          setTime(getCurrentTime());
        //   playTickSound(); // Play tick sound on each second
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
    
      const { hours, minutes, seconds } = time;
    
      const hourDegree = (hours % 12) * 30 + minutes * 0.5; // Calculate hour hand degrees
      const minuteDegree = minutes * 6; // Calculate minute hand degrees
      const secondDegree = seconds * 6; // Calculate second hand degrees
    
  return (
    <>
    <AnalogStyled>
        <div className='top-circle'>
            <img className="clock-img" src={clockImage} alt="image."/>
            <span className='center-point'></span>
            <div className="hands-group">
                <div className="hour-line" style={{ transform: `rotate(${hourDegree}deg)` }}></div>
                <div className="minute-line" style={{ transform: `rotate(${minuteDegree}deg)` }}></div>
                <div className="second-line" style={{ transform: `rotate(${secondDegree}deg)` }}></div>
            </div>
        </div>
    </AnalogStyled>
    
    </>
  )
}

export default Analog
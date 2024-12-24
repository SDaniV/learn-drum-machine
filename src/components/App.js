import './App.css';

import React, { useEffect, useState } from 'react';

function App(props) {
  const [recentSample, setRecentSample] = useState('');

  const playAudio = (sample) => {
    setRecentSample(sample);
    var playPromise = document.getElementById(sample).play();

    if (playPromise !== undefined) {
      playPromise.then(_ => {
        // Automatic playback started!
        // Show playing UI.
        // We can now safely pause video...
        // document.getElementById(sample).pause();
      })
      .catch(error => {
        // Auto-play was prevented
        // Show paused UI.
      });
    }
  };

  const handleClick = (sample) => {
    playAudio(sample) // Or any other action
  };

  const soundButton = [
    { id: 'Heater-1', key: 'Q', src: './audio-samples/Heater-1.mp3' },
    { id: 'Heater-2', key: 'W', src: './audio-samples/Heater-2.mp3' },
    { id: 'Heater-3', key: 'E', src: './audio-samples/Heater-3.mp3' },
    { id: 'Heater-4', key: 'A', src: './audio-samples/Heater-4_1.mp3' },
    { id: 'Clap', key: 'S', src: './audio-samples/Heater-6.mp3' },
    { id: 'Open-HH', key: 'D', src: './audio-samples/Dsc_Oh.mp3' },
    { id: "Kick-n'-Hat", key: 'Z', src: './audio-samples/Kick_n_Hat.mp3' },
    { id: 'Kick', key: 'X', src: './audio-samples/RP4_KICK_1.mp3' },
    { id: 'Closed-HH', key: 'C', src: './audio-samples/Cev_H2.mp3' }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      soundButton.forEach(button => {
        if (button.key === e.key) {
          const element = document.getElementById(button.id);
          if (element) {
            element.click();
          }
        };
      });
    };

    document.addEventListener('keydown', handleKeyDown);

    // return () => {
    //   document.removeEventListener('keydown', handleKeyDown); // Clean up the event listener
    // };
  });

  return (
    <div id="root">
      <div class="inner-container" id="drum-machine">
        <div class="pad-bank">
          <div className="drum-pad" id="Heater-1" onClick={() => playAudio("Q")}>
            <audio className="clip" id="Q" src="./audio-samples/Heater-1.mp3"></audio>
            Q
          </div>
          <div className="drum-pad" id="Heater-2" onClick={() => playAudio("W")}>
            <audio className="clip" id="W" src="./audio-samples/Heater-2.mp3"></audio>
            W
          </div>
          <div className="drum-pad" id="Heater-3" onClick={() => playAudio("E")}>
            <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
            E
          </div>
          <div className="drum-pad" id="Heater-4" onClick={() => playAudio("A")}>
            <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
            A
          </div>
          <div className="drum-pad" id="Clap" onClick={() => playAudio("S")}>
            <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
            S
          </div>
          <div className="drum-pad" id="Open-HH" onClick={() => playAudio("D")}>
            <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
            D
          </div>
          <div className="drum-pad" id="Kick-n'-Hat" onClick={() => playAudio("Z")}>
            {/* <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio> */}
            <audio className="clip" id="Z" src="./audio-samples/Kick_n_Hat.mp3"></audio>
            Z
          </div>
          <div className="drum-pad" id="Kick" onClick={() => playAudio("X")}>
            <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
            X
          </div>
          <div className="drum-pad" id="Closed-HH" onClick={() => playAudio("C")}>
            <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
            C
          </div>
        </div>
        <div class="logo">
          <div class="inner-logo">
            FCC&nbsp;
          </div>
        </div>
        <div class="controls-container">
          <div class="control">
            <p>Power</p>
            <div class="select">
              <div class="inner">

              </div>

            </div>
          </div>
          <p id="display">{recentSample}</p>
          <div class="volume-slider">
            <input max="1" min="0" step="0.01" type="range" value="0.3"></input>
          </div>
          <div class="control">
            <p>Bank</p>
            <div class="select">
              <div class="inner" style={{float: "left"}}></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

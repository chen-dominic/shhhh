import React, { useState, useEffect } from 'react';
import './App.css';
import './components/styles/hero.css';
import Confetti from 'react-confetti';
import Hero from './components/hero';

function App() {
  const initialYesButtonSize = { width: 300, height: 150, opacity: 0 };
  const [yesButtonSize, setYesButtonSize] = useState(initialYesButtonSize);
  const [showCelebration, setShowCelebration] = useState(false);

  const increaseYesButtonSize = () => {
    const newHeight = yesButtonSize.height + 30; // Increase the height by 30 pixels
    const newWidth = yesButtonSize.width + 60; // Increase the width by 60 pixels
    const newOpacity = yesButtonSize.opacity + 0.1;
    setYesButtonSize({
      width: Math.min(newWidth, initialYesButtonSize.width * 4),
      height: Math.min(newHeight, initialYesButtonSize.height * 4),
      opacity: newOpacity,
    });
  };

  const celebration = () => {
    setShowCelebration(true);
  }

  useEffect(() => {
    if (showCelebration) {
      console.log("Celebration started!");
    }
  }, [showCelebration]);

  return (
    <>
    <Hero />

    <h1 className='intermission'>i need to tell you something..</h1>
    <h1 className='intermission'>keep scrolling</h1>

    <div className="images">
      <div className="row">
        <img src="assets/icy1.png" alt="" />
        <img src="assets/canada1.png" alt="" />
        <img src="assets/christmas1.png" alt="" />
      </div>

      <h1 className='intermission'>woah, what is that stuff at the bottom</h1>
      <div className="space" />

      <div className="space" />

      <div className="row">
        <img src="assets/icy2.png" alt="" />
        <img src="assets/canada2.png" alt="" />
        <img src="assets/christmas2.png" alt="" />
      </div>
      <h1 className='intermission'>wow theres more!</h1>
      <div className="space" />

      <h1 className='intermission'>this is quite a long webpage...</h1>
      <div className="space" />

      <div className="row">
        <img src="assets/icy3.png" alt="" />
        <img src="assets/canada3.png" alt="" />
        <img src="assets/christmas3.png" alt="" />
      </div>
      <h1 className='intermission'>woahhh look at that!</h1>
      <div className="space" />

      <h1 className='intermission'>scroll a little more..</h1>

      <div className="space" />

      <div className="row">
        <img src="assets/icy4.png" alt="" />
        <img src="assets/canada4.png" alt="" />
        <img src="assets/christmas4.png" alt="" />
      </div>

      <h1 className='intermission'>wooooooooh, you did it!!!</h1>
      <h1 className='intermission'>that was fun</h1>
      <h1 className='intermission'>now.....</h1>
      <h1 className='intermission'></h1>
      <h1 className='intermission' style={{flexDirection: 'column',justifyContent: 'end'}}><span style={{fontSize: '3rem', marginBottom: '600px'}}>ITS TIME</span></h1>
    </div>
    <h1 className='intermission'>get READY</h1>
    <h1 className='intermission'>its about to go DOWN</h1>
    <h1 className='intermission'></h1>
    <h1 className='intermission'></h1>
    <div className="celebration"  style={{ display: showCelebration ? 'flex' : 'none' }}>
      {showCelebration && <Confetti gravity={.15}/>}
          <div className="header">
            <h1>LETS GOOOOOOOOOOOOOO</h1>
          </div>
          <h2 className='big-q'>will you go out with me?</h2>
          <div class="plans">
            <div class="plan">
              <h2>Activity 🎤</h2>
              <p>Date: 📅 Monday, February 19th</p>
              <p>Time: 🕐 2pm</p>
              <p>Location: 📍 1001 Sandhurst Circle, Toronto</p>
              <a href="https://www.google.com/search?q=1001+Sandhurst+Circle%2C+Toronto&oq=1001+Sandhurst+Circle%2C+Toronto&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRifBTIHCAIQIRifBdIBBzE4MmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" target='_blank'>🤨</a>
            </div>
            <div class="plan">
              <h2>Food 🍗 </h2>
              <p>Date: 📅 Monday, February 19th</p>
              <p>Time: 🕐 7pm</p>
              <p>Location: 📍 3720 Midland Ave #109, Scarborough</p>
              <a href="https://www.google.com/search?q=3720+Midland+Ave+%23109%2C+Scarborough&oq=3720+Midland+Ave+%23109%2C+Scarborough&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIKCAMQABiABBiiBDIKCAQQABiABBiiBNIBBzI1NGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8" target='_blank'>🤨</a>
            </div>
            <div class="plan">
              <h2>Accomplice 👯 </h2>
              <img className='accomplice' src="https://cdn.discordapp.com/attachments/841764033165656155/1193391577163387062/image.png?ex=65d17584&is=65bf0084&hm=098d83b2b16eb7f45e3f99f966cbb54b16007b6c9d132760c90f4319973e6440&" alt="" />
              <a href="https://www.linkedin.com/in/dominicchen1/" target='_blank'>🤨</a>
            </div>
          </div>
          <div className="dancers">
            <img className='dancer d1' src="https://media.tenor.com/VfNHIfcyAIMAAAAM/watch-a-fat-cat-dance-an-american-dance-girlfriend.gif" alt="" />
            <img className='dancer d2' src="https://media1.tenor.com/m/XOKm8hiDW3UAAAAC/catshakira-cat.gif" alt="" />
            <img className='dancer d1' src="https://media.tenor.com/3Qb1nM5v680AAAAM/cat-cats.gif" alt="" />
          </div>
    </div>
    <div className="question-con" style={{ display: showCelebration ? 'none' : 'block' }}>
      <div className="question">
        <h1>
          Will you be my Valentine?
        </h1>
      </div>
      <div className="btns">
        <button className='btn yes' style={{ width: yesButtonSize.width, height: yesButtonSize.height }} onClick={celebration}>Yes</button>
        <div className="no-con">
          <div className="hidden-img" style={{opacity: yesButtonSize.opacity}}>
            <img className='hidden-img' src="https://i.imgflip.com/88pq6p.png" alt="" />
            <h1>why :(</h1>
          </div>
          <button className='btn no' onClick={increaseYesButtonSize}>
              No
          </button>
        </div>
        <div class="sad-cat">
            <img src="https://media1.tenor.com/m/t7_iTN0iYekAAAAd/sad-sad-cat.gif" alt="" />
          </div>
      </div>
    </div>
    </>
  )
}

export default App

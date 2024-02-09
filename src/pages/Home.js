import React from 'react'
import cat from "../assets/cat.png"

const Home = () => {
  return (
    <div>
    <div className="welcome-message">
      <p>Congratulations! You've just unlocked the ultimate cat-ting edge technology in feline matchmaking. 🎉</p>
      <p>Prepare yourself for a whisker-licking adventure as you embark on a journey to find your fur-ever companion!</p>
      <p>Get ready to swipe right on the most eligible whiskered bachelors and bachelorettes in town! Remember, every swipe brings you one step closer to the ultimate cuddle puddle! 😻</p>
      <p>Let the purr-fect match-making begin! 🐈💕</p>
    </div>
    <img
    src={cat}
    alt="cat on boots"
    className="main-content-image"
  />
  </div>
  )
}

export default Home
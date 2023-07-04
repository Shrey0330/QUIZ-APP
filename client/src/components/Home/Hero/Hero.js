import React from 'react'
import heroStyle from './Hero.module.css';
import heroImg from './heroImg.png'
export default function Hero() {
  return (
    <div className={heroStyle.container}>
        <div className={heroStyle.left}>
            Give a Quick quiz on any catagory and test your knowledge
        </div>
        <div className={heroStyle.right}>
            <img src={heroImg} style={{borderRadius : '50%', height : '70vh'}} alt=""/>
        </div>
    </div>
  )
}

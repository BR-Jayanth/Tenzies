
import a1 from "../images/1.png"
import a2 from "../images/2.png"
import a3 from "../images/3.png"
import a4 from "../images/4.png"
import a5 from "../images/5.png"
import a6 from "../images/6.png"
import a11 from "../images/11.png"
import a22 from "../images/22.png"
import a33 from "../images/33.png"
import a44 from "../images/44.png"
import a55 from "../images/55.png"
import a66 from "../images/66.png"
import React from 'react'

export default function Die(props) {
  let imageArray = [a1, a2, a3, a4, a5, a6];
  let imageArrayHold = [a11, a22, a33, a44, a55, a66];

  const style = {
    backgroundColor: props.isHeld && '#59E391' || "#D9D9D9",
      animationName: "roll-dice",
      animationDuration: "0.5s",
      animationTimingFunction:" ease-in-out",
      animationDelay: "0s",
      animationIterationCount: "1"
      
  }
  const imgStyle = {
    width: "92px",
    height: "80px",
  }
  return (
    <div className='die-face' style={style} onClick={props.changeHeld} >
      <img src="" alt="" />
      <img src={props.isHeld ? imageArrayHold[props.value - 1]:imageArray[props.value - 1]} style={imgStyle} alt="Dice face" />
    </div>
  )
}

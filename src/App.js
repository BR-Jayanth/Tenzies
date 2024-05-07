import './App.css';
import Die from './component/Die';
import React, { useEffect } from 'react';
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


function App() {

  const generateDie = () => {
    //generate new die object
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }
  }

  const allNewDies = () => {
    //generate array of 10 random  intial dies
    const randomArray = [];
    for (let i = 0; i < 10; i++) {
      randomArray.push(generateDie());
    }
    return randomArray;
  }
  const [dice, setDice] = React.useState(allNewDies() || {});
  console.log(dice);
  const [tenzies, setTenzies] = React.useState(false);
  useEffect(() => {
    // checks for wining condition 
    console.log("dice Changed");
    if (dice.every(prevarrayOfNumber => prevarrayOfNumber.isHeld === true)) {
      const intial = dice[0].value;
      if (dice.every(prevArrayofNumber => prevArrayofNumber.value === intial)) {
        setTenzies(true);
      }
    }

  }, [dice])

  const handleClick = () => {
    // generate new dies Value when roll clicked / resets the game
    if (tenzies) {
      setDice(allNewDies())
      setTenzies(false);
    } else {
      setDice((olddice) => {
        return olddice.map((dice) => {
          return dice.isHeld === true ? dice : generateDie();
        })
      });
    }

  }
  const holdDice = (id) => {
    // holds the value of dies
    setDice((prevDice) => {
      let newdice = prevDice.map((die) => {
        return die.id === id ?
          { ...die, isHeld: !die.isHeld, }
          : die;
      })
      return newdice;
    })
    console.log(dice);
  }

  const newDies = dice.map(number => <Die key={number.id} value={number.value} isHeld={number.isHeld} changeHeld={() => holdDice(number.id)} />)

  return (

    <main className='main-container'>
      {tenzies && <Confetti
        width={window.innerWidth}
        height={"2000px"}
      />
      }
      <h1 className='main-heading'>Tenzies</h1>
      <p className='main-content'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dies-container">
        {newDies}
      </div>
      <button className='roll-btn'
        onClick={handleClick}
      >
        {tenzies ? "New Game" : " Roll"}

      </button>

    </main>
  );
}

export default App;

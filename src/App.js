import Grid from './components/Grid';
import Header from './components/Header';
import styles from './App.css';
import Keyboard from './components/Keyboard';
import {useState, useEffect} from 'react'
import GameManager from './components/GameManager';

function App() {
  // const [letter, setLetter] = useState("")
  // const [selectedLetters, setSelectedLetters] = useState([]);
  // let [curRow, setRow] = useState(0);
  // const [curColumn, setColumn] = useState(-1);
  // const [previousWords, setPreviousWords] = useState([])
  
  // const secretWord = "state"

  // useEffect(() => {
  //   loopThrough();
  // }, [letter])
  
  // const loopThrough = () => {
  //   letter != "" && selectedLetters.push(letter)
  //   for (let i=0; i<selectedLetters.length; i++){
  //     var cellToChange = document.getElementsByClassName(`${curRow},${i}`);
  //     if (cellToChange) {
  //       var newLetter = selectedLetters[i]
  //       console.log("here")
  //       console.log(newLetter)
  //       // var newHTML = "<th key=" + `${curRow},${i}` + ">" + selectedLetters[i] + "</th>";
  //       cellToChange.innerHTML = newLetter
  //   }
      
  //   }
  // }

  // const checkForWord = () => {
  //   let guessWord = selectedLetters.join('');
  //   if (guessWord == secretWord){
  //       console.log("You Won!")
  //   }
  //   else {
  //     setRow(++curRow)
  //     setColumn(0);
  //     setSelectedLetters([])
  //     setLetter("")
  //     setPreviousWords(...previousWords, selectedLetters)
  //  }
  // }

  return (
    <>
    <GameManager/>
    {/* <Header/>
    <Grid curCol={curColumn} curRow={curRow} letter={letter} selectedLetters={selectedLetters}/>
    <Keyboard select={setLetter} selected={letter} curCol={curColumn} setColumn={setColumn} setRow={setRow} curRow={curRow} handleSubmit={checkForWord}/> */}
    </>
  );
}

export default App;
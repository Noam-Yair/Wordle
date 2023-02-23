import React from 'react'
import {useState, useEffect} from 'react'
import Grid from "./Grid"
import Header from './Header'
import Keyboard from "./Keyboard"
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

function GameManager() {

    const [letter, setLetter] = useState("")
    const [selectedLetters, setSelectedLetters] = useState([]);
    let [curRow, setRow] = useState(0);
    let [curColumn, setColumn] = useState(-1);
    const [previousWords, setPreviousWords] = useState([])
    const [word, setWord] = useState('');
    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [fetchWord, setFetchWord] = useState(true);

    var secretWordLetters = word !=='' ? word.split("") : [];

  useEffect(() => {
    loopThrough();
  }, [curColumn])
    const fetchData = () => {
        setFetchWord(false);
        return fetch("http://localhost:8080/random", {
            method : "GET",
            mode: 'cors',
        })
            .then((response) => response.text())
            .then((data) => setWord(data.toUpperCase()))
    }


    useEffect(() => {
        if (fetchWord) {
            fetchData();
        }
    },[])
  
  const loopThrough = () => {
    letter !== "" && setSelectedLetters([...selectedLetters, letter])
    for (let i=0; i<selectedLetters.length; i++){
          let cellToChange = document.getElementsByClassName(`${curRow},${i}`);
          if (cellToChange) {
              var newLetter = selectedLetters[i]
              // @ts-ignore
              cellToChange.value = newLetter
        }
    }
  }

  async function checkForWord(){
      let guessWord = selectedLetters.join('');
      if (guessWord.length < 5){
          setOpen(true);
          setAlertMessage("Guessed word must include 5 letters")
      }
      else if (guessWord === word){
          // await new Promise(resolve => setTimeout(resolve, 3000));
          setTimeout(() => {
              setOpen(true);
              setAlertMessage("You Won!")
              setFetchWord(true);
          }, 2000);
      }
      else if (previousWords.length === 5){
          await new Promise(resolve => setTimeout(resolve, 3000));
          setOpen(true)
          setRow(0)
          setColumn(-1);
          setAlertMessage("You lost");
          setSelectedLetters([])
          setLetter("")
          setPreviousWords([])
      }
      else {
        setRow(++curRow)
        setColumn(-1);
        setSelectedLetters([])
        setLetter("")
        setPreviousWords([...previousWords, guessWord])
     }
  }

  const handleErase = () => {
      let newArr:string[] = selectedLetters.slice(0,-1);
      setColumn(newArr.length > 0 ? --curColumn : -1)
      setLetter(newArr.length > 0 ? newArr.pop() : "")
      setSelectedLetters(newArr)

      if (curColumn === -1){
          setSelectedLetters([]);
      }
  }

    const handleClose = () => {
        setOpen(false)
    };
  return (
        <>
        <Header/>
        <Grid curCol={curColumn} curRow={curRow} letter={letter} selectedLetters={selectedLetters} previousWords={previousWords} secretWordLetters={secretWordLetters}/>
        <Keyboard select={setLetter} selected={letter} curCol={curColumn} setColumn={setColumn}
                  setRow={setRow} handleSubmit={checkForWord}
                  handleErase={handleErase} selectedLetters={previousWords}/>
            {open ? <Snackbar
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                open={open}
                onClose={handleClose}
                message={alertMessage}
                key={'snackbar'}
            /> : <div/>}
        </>
      );
}

export default GameManager

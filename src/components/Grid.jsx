import React from 'react'
import { render } from 'react-dom';
import {useEffect} from 'react'

function renderCells(curCol, curRow, letter, selectedLetters) {
    var retTable = [];
    var rows = [];
    console.log(selectedLetters)
    for (let i=0; i<6; i++){
        for (let j=0; j<5; j++){
            if (curCol>=0 && curRow==i){
                for (let k=0; k<curCol; k++){
                    retTable.push(<th key={`${i},${k}`} className={`${i},${k}`}>{selectedLetters[k]}</th>)
                }
                retTable.push(<th key={`${i},${curCol}`} className={`${i},${curCol}`}>{letter}</th>)
                for (let k=curCol+1; k<5; k++){
                    retTable.push(<th key={`${i},${k}`} className={`${i},${k}`}></th>)
                }
                break;
            }
            // else if (curCol==j && curRow==i){
            //     retTable.push(<th key={`${i},${j}`} className={`${i},${j}`}>{letter}</th>)
            // }
            else{
                retTable.push(<th key={`${i},${j}`} className={`${i},${j}`}></th>)
            }
        }
        rows.push(<tr key={`${i}`}>{retTable}</tr>)
        retTable = []
    }
    return rows;
}

function Grid({curCol, curRow, letter, selectedLetters}) {
    useEffect(() => {
        renderCells(curCol, curRow, letter, selectedLetters)
    }, [selectedLetters])
    return (
        <div>
             <table>
            {renderCells(curCol, curRow, letter, selectedLetters)}
            </table>
        </div>
    )
}

export default Grid

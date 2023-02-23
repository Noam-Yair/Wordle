import React, {useEffect} from 'react'
export interface Props {
    letter: string;
    curCol: number;
    curRow: number;
    previousWords: string[];
    secretWordLetters: string[];
    selectedLetters: string[];
}
function Grid({curCol, curRow, letter, selectedLetters, previousWords, secretWordLetters}: Props) {
    function renderCurLine(curCol: number, curRow: number, letter: string , selectedLetters:string[]){
        let retTable = [];
        let rows = [];

        if (curCol>=0) {
            for (let k = 0; k < curCol; k++) {
                retTable.push(<th key={`${curRow},${k}`} className={`${curRow},${k}`}>{selectedLetters[k]}</th>)
            }
            retTable.push(<th key={`${curRow},${curCol}`} className={`${curRow},${curCol}`}>{letter}</th>)
            for (let k = curCol + 1; k < 5; k++) {
                retTable.push(<th key={`${curRow},${k}`} className={`${curRow},${k}`}></th>)
            }
        }
        rows.push(<tr key={`${curRow}`}>{retTable}</tr>)

        return rows;
    }

    useEffect(() => {
        renderCurLine(curCol, curRow, letter, selectedLetters);
    }, [curCol]);



    function renderPreviousWords(previousWords: string[]){
        let retTable = [];
        let rows = [];
        var letter;
        for (let i=0; i<previousWords.length; i++) {
            for (let j=0; j<5; j++){
                letter = previousWords[i].charAt(j);
                if (secretWordLetters.includes(letter)){
                    if (secretWordLetters[j] === letter){
                        retTable.push(<th style={{backgroundColor: "#78e08f", transition: "background-color " + "1.5s" + " cubic-bezier(0, 0, 0.2, 1) " + j*0.2+"s"}} key={`${i},${j}`}
                                          className={`${i},${j}`}>{letter}</th>)
                    }
                    else {
                        retTable.push(<th style={{backgroundColor: "gray", transition: "background-color " + "1.5s" + " cubic-bezier(0, 0, 0.2, 1) " +j*0.2+"s"}} key={`${i},${j}`}
                                          className={`${i},${j}`}>{letter}</th>)
                    }
                }
                else {
                    retTable.push(<th key={`${i},${j}`} className={`${i},${j}`}>{letter}</th>)
                }
            }
            rows.push(<tr key={`${i}`}>{retTable}</tr>)
            retTable = []
        }
        return rows;
    }

    function newRender(curCol: number, curRow: number, letter : string, selectedLetters: string[], previousWords : string[]){
        return renderPreviousWords(previousWords).concat(renderCurLine(curCol, curRow, letter, selectedLetters)).concat(renderEmptyRows(curRow, curCol));
    }

    function renderEmptyRows(curRow :number, curCol: number){
        let retTable = [];
        let rows = [];
        for (let i = curCol === -1 ? 0 : 1; curCol === -1 && curRow === 0 ? i<6 : i<6-curRow ; i++) {
            for (let j=0; j<5; j++){
                retTable.push(<th key={`${curRow + 1 + i},${j}`} className={`${i},${j}`}></th>)
            }

            rows.push(<tr key={`${curRow + 1 + i}`}>{retTable}</tr>)
            retTable = []
        }
        return rows;
    }
    return (
        <div>
             <table>
                 <tbody>
                    { newRender(curCol, curRow, letter, selectedLetters, previousWords)}
                 </tbody>
            </table>
        </div>
    )
}

export default Grid

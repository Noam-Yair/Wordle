import {Dispatch, SetStateAction} from 'react'
import {RiDeleteBack2Line} from "react-icons/ri"
import {AiOutlineEnter} from "react-icons/ai"

export interface Props {
    select: Dispatch<SetStateAction<string>>;
    selected: string;
    curCol: number;
    setColumn: Dispatch<SetStateAction<number>>;
    setRow: Dispatch<SetStateAction<number>>;
    handleSubmit: () => void;
    handleErase: () => void;
    selectedLetters: string[];
}

function Keyboard({ select, selected, curCol, setColumn, setRow, handleSubmit, handleErase, selectedLetters } :Props) {

    const firstRowLetters = ["Q","W","E","R","T","Y","U","I","O","P"]
    const secondRowLetters = ["A","S","D","F","G","H","J","K","L"]
    const thirdRowLetters = ["Z","X","C","V","B","N","M"]

    // @ts-ignore
    const handleChange = (e) => {
      select(e.currentTarget.value)
      setColumn(curCol => curCol < 5 ? ++curCol : curCol = 0);
    }

    let selectedLettersFlatten = selectedLetters.map(word => word.split('')).flat();

    return (
        <div className="keyboard">
            <ul className='rating'>
                {firstRowLetters.map(letter =>
                     <li key={`rating-${letter}`}
                         style={selectedLettersFlatten.includes(letter) ? {background: '#3c6382' } : null}>
                    <input
                        type='radio'
                        id={letter}
                        name='rating'
                        value={letter}
                        onClick={handleChange}
                        checked={selected === letter}
                        disabled={curCol===4}
                        />
                        <label htmlFor={letter}>{letter}</label>
                    </li>)}
                <li key={`rating-delete`} style={{cursor: "pointer"}} onClick={handleErase}>
                    <RiDeleteBack2Line/>
                </li>
            </ul>
            
            <ul className='rating'>
                {secondRowLetters.map(letter => 
                     <li key={`rating-${letter}`}
                         style={selectedLettersFlatten.includes(letter) ? {background: '#3c6382'} : null}>
                    <input
                        type='radio'
                        id={letter}
                        name='rating'
                        value={letter}
                        onClick={handleChange}
                        checked={selected === letter}
                        disabled={curCol===4}
                        />
                        <label htmlFor={letter}>{letter}</label>
                    </li>)}
                <li key={"rating-enter"} onClick={handleSubmit} style={{cursor: "pointer"}}>
                    <AiOutlineEnter/>
                </li>
            </ul>
        
            <ul className='rating'>
                {thirdRowLetters.map(letter => 
                     <li key={`rating-${letter}`}
                         style={selectedLettersFlatten.includes(letter) ? {background: '#3c6382'} : null}>
                    <input
                        type='radio'
                        id={letter}
                        name='rating'
                        value={letter}
                        onClick={handleChange}
                        checked={selected === letter}
                        disabled={curCol===4}
                        />
                        <label htmlFor={letter}>{letter}</label>
                    </li>)}
            </ul>
        </div>
    )
}

export default Keyboard

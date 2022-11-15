import {useState} from 'react'
import {RiDeleteBack2Line} from "react-icons/ri"
import {AiOutlineEnter} from "react-icons/ai"

function Keyboard({ select, selected, curCol, setColumn, setRow, handleSubmit }) {

    const firstRowLetters = ["q","w","e","r","t","y","u","i","o","p"]
    const secondRowLetters = ["a","s","d","f","g","h","j","k","l"]
    const thirdRowLetters = ["z","x","c","v","b","n","m"]

    const handleChange = (e) => {
      select(e.currentTarget.value)
      setColumn(curCol => curCol < 5 ? ++curCol : curCol = 0);
    }

    return (
        <div className="keyboard">

            <ul className='rating'>
                {firstRowLetters.map(letter => 
                     <li key={`rating-${letter}`}>
                    <input
                        type='radio'
                        id={letter}
                        name='rating'
                        value={letter}
                        onChange={handleChange}
                        checked={selected === {letter}}
                        disabled={curCol==4}
                        />
                        <label htmlFor={letter}>{letter}</label>
                    </li>)}
                    <RiDeleteBack2Line/>
            </ul>
            
            <ul className='rating'>
                {secondRowLetters.map(letter => 
                     <li key={`rating-${letter}`}>
                    <input
                        type='radio'
                        id={letter}
                        name='rating'
                        value={letter}
                        onChange={handleChange}
                        checked={selected === {letter}}
                        disabled={curCol==4}
                        />
                        <label htmlFor={letter}>{letter}</label>
                    </li>)}
                    <AiOutlineEnter onClick={handleSubmit}/>
            </ul>
        
            <ul className='rating'>
                {thirdRowLetters.map(letter => 
                     <li key={`rating-${letter}`}>
                    <input
                        type='radio'
                        id={letter}
                        name='rating'
                        value={letter}
                        onChange={handleChange}
                        checked={selected === {letter}}
                        disabled={curCol==4}
                        />
                        <label htmlFor={letter}>{letter}</label>
                    </li>)}
            </ul>
        </div>
    )
}

export default Keyboard

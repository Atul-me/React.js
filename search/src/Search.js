import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import './index.css'    

const Search = () => {
    const [showInput, setShowInput] = useState(false);
    const [bgcolor, setBgColor] = useState("white");

    const handleClick = e => {
        setBgColor("#1a1a1a")
        if(e.target.className === 'container'){
            setShowInput(true)
            setBgColor("#fff")
        }
    }
  return (
    <>
    <section
        className='container'
        style={{backgroundColor: bgcolor}}
        onClick={handleClick}
    >
        {showInput ? (<input type='text' placeholder='Search...'/>): <FaSearch onClick={() => setShowInput(true)} />}
    </section>
    </>
  )
}

export default Search
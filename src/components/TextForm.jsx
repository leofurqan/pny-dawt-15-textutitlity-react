import React, { useState } from 'react'

export default function TextForm() {
    const [text, setText] = useState('')
    const [letters, setLetters] = useState(0)
    const [words, setWords] = useState(0)
    const [time, setTime] = useState(0)
    
    const handleChange = (e) => {
        setText(e.target.value)
        setLetters(text.length)
        const w = text == "" ? 0 : text.split(" ").length
        setWords(w)
        setTime(words * 0.5)
    }

    const handleUppercase = () => {
        const uppercase = text.toUpperCase()
        setText(uppercase)
    }

    const handleClearText = () => {
        setText('')
    }

    return (
        <div className='container my-5'>
            <div className='row'>
                <h1>Enter text to Analyze</h1>
            </div>
            <div className='row mt-3'>
                <textarea className='form-control' rows="8" value={text} onChange={handleChange}></textarea>
            </div>

            <div className='row mt-3'>
                <div className='col-md-3'>
                    <h5>Average {time} Seconds</h5>
                </div>

                <div className='col-md-7'></div>

                <div className='col-md-2 d-flex justify-content-end'>
                    <h5>{letters} / {words}</h5>
                </div>
            </div>

            <div className='row mt-3'>
                <button className='btn btn-primary col-md-2 mx-2' onClick={handleUppercase}>Uppercase</button>
                <button className='btn btn-primary col-md-2 mx-2'>Lowercase</button>
                <button className='btn btn-primary col-md-2 mx-2' onClick={handleClearText}>Clear Text</button>
            </div>
        </div>
    )
}

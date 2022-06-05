import React, { useState } from 'react'
import Label from './Label';

export default function Search() {
    const [input, setInput] = useState('');

    const inputHandler = (event) => {
        setInput(event.target.value);
        console.log(input);
    }

    return (
        <div className='searchContainer'>
            <div className='search'>
                <input onChange={inputHandler} placeholder='Enter city' />
                <button disabled={input == ''} >Search</button>
            </div>
            <div className='period'>
                <Label name='yesterday' />
                <Label name='now' />
                <Label name='tomorrow' />
                <Label name='next week' />
            </div>
        </div>
    )
}

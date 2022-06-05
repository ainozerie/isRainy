import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function ModeSwitcher() {
    const darkMode = useSelector(state => state.darkMode)
    console.log(darkMode);
    const dispath = useDispatch();

    const clickHandler = () => {
        darkMode === true ? dispath({type: 'MODE', payload: false}) : dispath({type: 'MODE', payload: true});
    }

    return <div className='mode' onClick={clickHandler}>{darkMode ? 'light' : 'dark'}</div>;
    
}

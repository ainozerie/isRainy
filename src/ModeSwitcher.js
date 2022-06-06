import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MdDarkMode } from 'react-icons/md';
import { MdOutlineDarkMode } from 'react-icons/md';

export default function ModeSwitcher() {
    const darkMode = useSelector(state => state.darkMode)
    const dispath = useDispatch();

    const clickHandler = () => {
        darkMode === true ? dispath({type: 'MODE', payload: false}) : dispath({type: 'MODE', payload: true});
    }

    return <div className='mode' onClick={clickHandler}>{darkMode ? <MdDarkMode/> : <MdOutlineDarkMode/> }</div>;
    
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Label(props) {
    const period = useSelector(state => state.period)
    const dispath = useDispatch();

    const clickHandler = (event) => {
        console.log(event.target.name);
        dispath({
            type: 'PERIOD',
            payload: event.target.name
        })
    }

    return (
        <button onClick={clickHandler} name={props.name} disabled={period == props.name}>{props.name}</button>
    )
}

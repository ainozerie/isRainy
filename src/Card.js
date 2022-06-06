import React from 'react'

export default function Card(props) {
    return (
        <div className='card' style={{backgroundImage: `url(${props.url})`}}>
            <div className='information' >
                <h2>{props.city}</h2>
                <p>{props.text}</p>
                <p>Temperature is {props.temp}</p>
                <p>But feels like {props.feelslike}</p>
                <p>The wind {props.wind}m/s</p>
            </div>
            <div className='date'>{props.date}</div>

        </div>
    )
}

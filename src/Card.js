import React from 'react'

export default function Card(props) {
    return (
        <div className='card' style={{backgroundImage: `url(${props.url})`}}>
            <div className='information'>
                <h2>{props.city}</h2>
                <div className='dataContainer'>
                    <p>{props.text}</p>
                    <p>Temperature is {props.temp}°C</p>
                    {props.feelslike && <p>But feels like {props.feelslike}°C</p>}
                    <p>The wind {props.wind}m/s</p>
                </div>
            </div>
            <div className='date'>{props.date}</div>

        </div>
    )
}

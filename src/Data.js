import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

export default function Data() {
    const isLoading = useSelector(state => state.isLoading)
    const data = useSelector(state => state.data)

    if (data.length > 3) data.shift(); // limits amount of cards to show
    const dataToShow = data.map(item => {
        return <Card 
            key={item.key} 
            text={item.text} 
            temp={item.temp} 
            feelslike={item.feelslike} 
            wind={item.wind} 
            city={item.city}
            url={item.url}
            date={item.date} />
    })

    return (
        <div className={`data ${data.length > 0 ? 'showinfo' : ''}`}>
            
            {data.length > 0 && dataToShow}
        </div>
    )
}

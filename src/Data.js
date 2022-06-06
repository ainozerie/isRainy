import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

export default function Data() {
    const isLoading = useSelector(state => state.isLoading)
    const period = useSelector(state => state.period)
    const data = useSelector(state => state.data)
    console.log(data);
    const filteredData = data.filter(item => item.date.toLowerCase() === period);

    if (filteredData.length > 3) filteredData.shift(); // limits amount of cards to show
    const dataToShow = filteredData.map(item => {
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

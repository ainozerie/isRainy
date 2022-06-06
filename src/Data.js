import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

export default function Data() {
    const isLoading = useSelector(state => state.isLoading)
    const data = useSelector(state => state.data)
    console.log(data);
    const dataToShow = data.map(item => {
        return <Card 
            key={item.text + item.temp} 
            text={item.text} 
            temp={item.temp} 
            feelslike={item.feelslike} 
            wind={item.wind} 
            city={item.city}
            url={item.url}
            date={item.date} />
    })
    console.log(data);

    return (
        <div className='data'>
            
            {data.length > 0 && dataToShow}
        </div>
    )
}

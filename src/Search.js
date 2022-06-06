import axios from 'axios';
import React, { useState } from 'react'
import Label from './Label';
import config from './configData.json';
import { useDispatch, useSelector } from 'react-redux';

export default function Search() {
    const [input, setInput] = useState('');
    const period = useSelector(state => state.period)
    const dispath = useDispatch();

    const inputHandler = (event) => {
        setInput(event.target.value);
    }
    const clickHandler = () => {
        dispath({type: 'LOADING', payload: true})
        getWeather(input).then(async (res) => {
            const url = await getURL(input);
            res.url = url;
            dispath({type: 'DATA', payload: res})
            dispath({type: 'LOADING', payload: false})
            setInput('');
        })
        
    }
    const getWeather = async (city) => {
        const params = {
            key: config.API_KEY,
            q: city,
            aqi: 'no'
        }
        const res = await axios(config.weather_url, {params});
        const data = {
            text: res.data.current.condition.text,
            temp: res.data.current.temp_c,
            feelslike: res.data.current.feelslike_c,
            wind: res.data.current.wind_mph,
            date: 'Now',
            city: res.data.location.name        };
        return data;
    }
    const getURL = async (city) => {
        const params = {
            client_id: config.ACCESS_KEY,
            query: city,
            page: '1'
        }
        const res = await axios(config.picture_url, {params});
        console.log(2);
        return res.data.results[0].urls.small;
    }

    return (
        <div className='searchContainer'>
            <div className='search'>
                <input onChange={inputHandler} value={input} placeholder='Enter city' />
                <button onClick={clickHandler} disabled={input == ''} >Search</button>
            </div>
            <div className='period'>
                <Label name='yesterday' />
                <Label name='now' />
                <Label name='tomorrow' />
                <Label name='next 3 days' />
            </div>
        </div>
    )
}

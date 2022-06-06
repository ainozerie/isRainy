import axios from 'axios';
import React, { useState } from 'react'
import Label from './Label';
import config from './configData.json';
import { useDispatch, useSelector } from 'react-redux';

export default function Search() {
    const isLoading = useSelector(state => state.isLoading)
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
            res.key = getRandomInt(10000);
            dispath({type: 'DATA', payload: res})
            dispath({type: 'LOADING', payload: false});
            setInput('');
        })
        
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    const getWeather = async (city) => {
        let params;
        let dt;
        switch(period) {
            case 'now':
                params = {
                    key: config.API_KEY,
                    q: city,
                    aqi: 'no'
                }
                const res = await axios(config.weather_today, {params});
                return {
                    text: res.data.current.condition.text,
                    temp: res.data.current.temp_c,
                    feelslike: res.data.current.feelslike_c,
                    wind: res.data.current.wind_mph,
                    date: 'Today',
                    city: res.data.location.name };
            case 'yesterday':
                dt = returnDt('yesterday');
                params = {
                    key: config.API_KEY,
                    q: city,
                    dt: dt
                }
                const result = await axios(config.weather_yesterday, {params});
                console.log(result);
                return {
                    text: result.data.forecast.forecastday[0].day.condition.text,
                    temp: `${result.data.forecast.forecastday[0].day.mintemp_c}-${result.data.forecast.forecastday[0].day.maxtemp_c}`,
                    wind: result.data.forecast.forecastday[0].day.maxwind_mph,
                    date: 'Yesterday',
                    city: result.data.location.name };
            case 'tomorrow':
                params = {
                    key: config.API_KEY,
                    q: city,
                    aqi: 'no',
                    alerts: 'no',
                    days: 1
                }
                const rezult = await axios(config.weather_tomorrow, {params});
                console.log(rezult);
                return {
                    text: rezult.data.forecast.forecastday[0].day.condition.text,
                    temp: `${rezult.data.forecast.forecastday[0].day.mintemp_c}-${rezult.data.forecast.forecastday[0].day.maxtemp_c}`,
                    wind: rezult.data.forecast.forecastday[0].day.maxwind_mph,
                    date: 'Tomorrow',
                    city: rezult.data.location.name };
        }
    }
    const returnDt = (when) => {
        let year;
        let month;
        let day;
        switch(when) {
            case 'yesterday':
                let yesterday = new Date(new Date() - 86400000)
                year = yesterday.getFullYear();
                month = yesterday.getMonth();
                month < 10 ? month = `0${++month}` : month = ++month;
                day = yesterday.getDate()
                day < 10 ? day = `0${day}` : day = day;
                return `${year}-${month}-${day}`;
            case 'tomorrow':
                let tomorrow = new Date(new Date() + 86400000)
                year = tomorrow.getFullYear();
                month = tomorrow.getMonth();
                month < 10 ? month = `0${++month}` : month = ++month;
                day = tomorrow.getDate()
                day < 10 ? day = `0${day}` : day = day;
                return `${year}-${month}-${day}`;
        }
    }
    const getURL = async (city) => {
        const params = {
            client_id: config.ACCESS_KEY,
            query: city,
            page: '1'
        }
        const res = await axios(config.picture_url, {params});
        console.log(res);
        return res.data.results[0].urls.small;
    }

    return (
        <div className='searchContainer'>
            <div className='search'>
                <input onChange={inputHandler} value={input} placeholder='Enter city' />
                <button onClick={clickHandler} disabled={input == ''} >{isLoading && 'Loads'}{!isLoading && 'Search'}</button>
            </div>
            <div className='period'>
                <Label name='yesterday' />
                <Label name='now' />
                <Label name='tomorrow' />
            </div>
        </div>
    )
}

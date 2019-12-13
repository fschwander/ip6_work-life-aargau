import React, {useEffect, useState} from 'react';
import iconArrowDown from '../../res/icons/arrow_down.svg'
import iconWeather from '../../res/icons/location.svg'
import iconLocation from '../../res/icons/location.svg'
import iconTime from '../../res/icons/time.svg'
import iconWind from '../../res/icons/wind.svg'

export const LocationLabel: React.FC = () => {

  const getLocalTime = (): string => {
    let date = new Date();
    return date.getUTCHours() + 1 + ':' + ('0' + date.getUTCMinutes()).slice(-2)
  }

  const [time, setTime] = useState(getLocalTime);

  useEffect(() => {
    const clockInterval = setInterval(() => setTime(getLocalTime), 1000);
    return () => {
      clearInterval(clockInterval)
    }
  }, []);

  return (
    <div className='LocationLabel'>
      <h2>Die Stadt Baden</h2>
      <div className='horizontal-container'>
        <div className='icon-container'>
          <img src={iconTime} alt='icon'/>
          <p><b>{time}</b></p>
        </div>
        <div className='icon-container'>
          <img src={iconWeather} alt='icon'/>
          <p><b>10.2</b>°C</p>
        </div>
        <div className='icon-container'>
          <img src={iconWind} alt='icon'/>
          <p><b>14.5</b>km/h</p>
        </div>

      </div>
      <div className='horizontal-container'>
        <div className='slider'>
          <p className='highlighted'>Baden</p>
          <img src={iconArrowDown} alt='icon'/>
        </div>
        <img src={iconLocation} alt='icon'/>
      </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Location.css';
import { Spring } from 'react-spring/renderprops';

const Location = () => {
  const [temp, setTemp] = useState(null);
  const [unit, setUnit] = useState('C');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { main: { temp } } } = await axios.get(`https://${process.env.REACT_APP_WEATHERMAP_HOST}/data/2.5/weather?id=5391959&units=metric&appid=${process.env.REACT_APP_WEATHERMAP_API_KEY}`);
        setTemp(temp);
      }
      catch (e) {
        console.log('Cannot access weather API');
        setError(e);
      }
    }
    fetchData();
  }, []);

  const changeUnit = () => {
    if (temp === null) return;

    if (unit === 'C' ) {
      const targetTemp = (temp * 9/5) + 32;
      setTemp(targetTemp.toFixed(2));
      setUnit('F');
    } else {
      const targetTemp = (temp - 32) * 5/9;
      setTemp(targetTemp.toFixed(2));
      setUnit('C');
    }
  }
console.log(Number(temp));
  return (
    <div className="location">
      <p><span className="location-content">Current Location: </span>San Francisco, CA</p>
      { !error && temp &&
      <p>
        <span className="location-content">Weather: </span>
        {temp === null ?
          'Loading' :
          <Spring
            to={{ number: Number(temp) }}
          >
            {props => <span>{props.number.toFixed(1)}°{unit}</span>}
          </Spring>}
        <span onClick={changeUnit} className="location-link link">{`${String.fromCharCode(8618)} ${unit === 'C' ? 'F' : 'C'}°`}</span>
      </p> }
      <p><span className="location-content">Workplace: </span>Flexport</p>
    </div>
  );
}

export default Location;

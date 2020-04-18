import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Location.css';

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

  return (
    <div className="Location">
      <p><span className="Location-content">Current Location: </span>San Francisco, CA</p>
      { !error && temp &&
      <p>
        <span className="Location-content">Weather: </span>
        {temp === null ? 'Loading' : `${temp}°${unit}`}
        <span onClick={changeUnit} className="Location-link Link">{`${String.fromCharCode(8618)} ${unit === 'C' ? 'F' : 'C'}°`}</span>
      </p> }
      <p><span className="Location-content">Workplace: </span>Quest Analytics</p>
    </div>
  );
}

export default Location;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Location.css';

const Location = () => {
  const [temp, setTemp] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { main: { temp } } } = await axios.get(`http://${process.env.REACT_APP_WEATHERMAP_HOST}/data/2.5/weather?id=5391959&units=metric&appid=${process.env.REACT_APP_WEATHERMAP_API_KEY}`);
        setTemp(temp);
        setError(null);
      }
      catch (e) {
        console.log('Cannot access weather API');
        setError(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="Location">
      <p><span className="Location-content">Current Location: </span>San Francisco, CA</p>
      { !error && <p><span className="Location-content">Weather: </span>{temp == null ? 'Loading' : `${temp}°C`} </p> }
      <p><span className="Location-content">Workplace: </span>Quest Analytics</p>
    </div>
  );
}

export default Location;

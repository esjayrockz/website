import React from 'react';
import Location from './Location.js';
import SkillsAnimation from './SkillsAnimation.js';
import './Left.css';

const Left = () => {
  return (
    <div className="left">
      <Location />
      <SkillsAnimation />
    </div>
  );
};

export default Left;
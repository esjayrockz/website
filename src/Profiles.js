import React, { useState } from 'react';
import { facebookLogo, githubLogo, instagramLogo, linkedinLogo, twitterLogo } from './images';
import './Profiles.css';
import {useSpring, animated} from 'react-spring';

const Profiles = () => {
  const [logoToggle, toggleLogo] = useState(null);

  const animateGithub = useSpring({ 
    transform: logoToggle === 'github' ? 'translate3d(0,-4px,0)' : 'translate3d(0,1px,0)',
  });
  const animateLinkedin = useSpring({ 
    transform: logoToggle === 'linkedin' ? 'translate3d(0,-4px,0)' : 'translate3d(0,1px,0)',
  });
  const animateTwitter = useSpring({ 
    transform: logoToggle === 'twitter' ? 'translate3d(0,-4px,0)' : 'translate3d(0,1px,0)',
  });
  const animateInstagram = useSpring({ 
    transform: logoToggle === 'instagram' ? 'translate3d(0,-4px,0)' : 'translate3d(0,1px,0)',
  });
  const animateFacebook = useSpring({ 
    transform: logoToggle === 'facebook' ? 'translate3d(0,-4px,0)' : 'translate3d(0,1px,0)',
  });

  return (
    <div className="Profile">
      <a
        className="Logo"
        href="https://github.com/esjayrockz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <animated.img
          src={githubLogo}
          className="Icon"
          alt="logo"
          style={animateGithub}
          onMouseEnter={() => toggleLogo('github')}
          onMouseLeave={() => toggleLogo(null)} />
      </a>
      <a
        className="Logo"
        href="https://www.linkedin.com/in/suvajit-chakrabarty/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <animated.img
          src={linkedinLogo}
          className="Icon"
          alt="logo"
          style={animateLinkedin}
          onMouseEnter={() => toggleLogo('linkedin')}
          onMouseLeave={() => toggleLogo(null)} />
      </a>
      <a
        className="Logo"
        href="https://twitter.com/esjayrockz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <animated.img src={twitterLogo}
          className="Icon"
          alt="logo"
          style={animateTwitter}
          onMouseEnter={() => toggleLogo('twitter')}
          onMouseLeave={() => toggleLogo(null)} />
      </a>
      <a
        className="Logo"
        href="https://www.instagram.com/esjayrockz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <animated.img src={instagramLogo} 
          className="Icon"
          alt="logo"
          style={animateInstagram}
          onMouseEnter={() => toggleLogo('instagram')}
          onMouseLeave={() => toggleLogo(null)} />
      </a>
      <a
        className="Logo"
        href="https://www.facebook.com/suvajit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <animated.img src={facebookLogo}
          className="Icon"
          alt="logo"
          style={animateFacebook}
          onMouseEnter={() => toggleLogo('facebook')}
          onMouseLeave={() => toggleLogo(null)} />
      </a>
      {/* <a target="_blank" href="https://icons8.com/icons/set/linkedin--v2">LinkedIn icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
    </div>
  );
}

export default Profiles;

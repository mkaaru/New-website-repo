import React, { useState, useEffect } from 'react';
import { RiMessage3Line } from 'react-icons/ri';
import './header.css';
import devM from '../../assets/devM.png'; // Add your logo image to the same folder or update path

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-left">
        <div className="logo">
          <img src={devM} alt="Logo" />
        </div>
        <h1 className="company-name">DerivKiller</h1>
        <div className="message-icon">
          <RiMessage3Line />
        </div>
      </div>
      <div className="header-right">
        <button className="login-btn">Log In</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;

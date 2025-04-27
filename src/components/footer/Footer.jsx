import React, { useState, useEffect } from 'react';
import { Settings, HelpCircle, Maximize, X, Globe, Sun, Moon } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  // Handle full screen toggle
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullScreen(true);
      }).catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullScreen(false);
      }).catch(err => {
        console.error(`Error attempting to exit fullscreen: ${err.message}`);
      });
    }
  };

  // Update date and time
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toISOString().slice(0, 10);
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const minutes = String(now.getUTCMinutes()).padStart(2, '0');
      const seconds = String(now.getUTCSeconds()).padStart(2, '0');
      setCurrentDateTime(`${formattedDate} ${hours}:${minutes}:${seconds} GMT`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  // Toggle language menu
  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  // Available languages
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'it', name: 'Italian', flag: '🇮🇹' },
    { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
    { code: 'ko', name: 'Korean', flag: '🇰🇷' },
  ];

  return (
    <footer className={`footer ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Full Screen Toggle */}
      <button 
        onClick={toggleFullScreen} 
        className="footer-button"
        aria-label={isFullScreen ? "Exit full screen" : "Enter full screen"}
      >
        {isFullScreen ? <X size={20} /> : <Maximize size={20} />}
      </button>
      
      {/* Language Selector */}
      <div className="language-selector">
        <button 
          onClick={toggleLanguageMenu}
          className="footer-button language-button"
          aria-label="Select language"
        >
          <Globe size={20} />
          <span>EN</span>
        </button>
        
        {showLanguageMenu && (
          <div className="language-menu">
            <ul>
              {languages.map((lang) => (
                <li key={lang.code} className="language-option">
                  <span className="language-flag">{lang.flag}</span>
                  <span>{lang.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      {/* Settings Button */}
      <button 
        className="footer-button"
        aria-label="Settings"
      >
        <Settings size={20} />
      </button>
      
      {/* Help Center Button */}
      <button 
        className="footer-button"
        aria-label="Help center"
      >
        <HelpCircle size={20} />
      </button>
      
      {/* Dark/Light Mode Toggle */}
      <button 
        onClick={toggleDarkMode}
        className="footer-button"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      
      {/* Date and Time */}
      <div className="datetime">
        {currentDateTime}
      </div>
      
      {/* Network Status */}
      <div className="network-status">
        <div className="status-indicator">
          <div className="status-dot"></div>
          <div className="status-pulse"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  // Ensure this is at the end

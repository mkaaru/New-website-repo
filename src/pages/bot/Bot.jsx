import React, { useState } from 'react';
import { Navbar } from '../../components'
import { Header } from '../../components'
import { Footer } from '../../components'
import './bot.css';

export default function Bot() {
  const [activeTab, setActiveTab] = useState('popular');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
        <Header />
        <Navbar />
        <div className="trading-bots-container">
      <div className="top-section">
        <div className="tabs">
          <button 
            className={`tab-button ${activeTab === 'normal' ? 'active-normal' : ''}`}
            onClick={() => handleTabChange('normal')}
          >
            Normal Bots
          </button>
          <button 
            className={`tab-button ${activeTab === 'popular' ? 'active-popular' : ''}`}
            onClick={() => handleTabChange('popular')}
          >
            Popular Bots
          </button>
        </div>
        <div className="user-section">
          <span className="user-icon">📖</span>
          <span className="user-text">User</span>
        </div>
      </div>
      
      <div className="bots-grid">
        <div className="bot-card">
          <div className="bot-name">SNIPER LITE BOT</div>
        </div>
        <div className="bot-card">
          <div className="bot-name">DIGIT MATCH HUNTER BOT</div>
        </div>
        <div className="bot-card">
          <div className="bot-name">MAPANGALE AI BOT EVEN ODD</div>
        </div>

        <div className="bot-card">
          <div className="bot-name">M3 SPEED BOT</div>
        </div>
        <div className="bot-card">
          <div className="bot-name">EVEN ODD SWITCHER ROBOT</div>
        </div>
        <div className="bot-card">
          <div className="bot-name">DIFFERS BOT</div>
        </div>

        <div className="bot-card">
          <div className="bot-name">SMARTPRO_BOT</div>
        </div>
        <div className="bot-card">
          <div className="bot-name">EVEN_ODD ENTRY BOT</div>
        </div>
        <div className="bot-card">
          <div className="bot-name">VirtualHOOK-Differs</div>
        </div>

        <div className="bot-card">
          <div className="bot-name">MKOREAN SV6 BOT</div>
        </div>
      </div>
      
      <div className="footer">
        <div className="disclaimer-button">
          <span className="warning-icon">⚠️</span>
          <span className="disclaimer-text">Risk Disclaimer</span>
        </div>
        <div className="windows-notice">
          <div className="windows-text">Activate Windows</div>
          <div className="windows-subtext">Go to Settings to activate Windows</div>
        </div>
      </div>
    </div>
    </div>
  );
}
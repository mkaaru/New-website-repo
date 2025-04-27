import React, { useState } from 'react';
import Header from '../../components/header/Header'
import { Navbar } from '../../components';
import './Dashboard.css';

const Dashboard = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const toggleDisclaimer = () => {
    setShowDisclaimer(!showDisclaimer);
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="dashboard-container">
      <div className="top-bar">
        <div className="user-guide">
          <i className="ri-book-open-line"></i>
          <span>User Guide</span>
        </div>
      </div>
      
      <div className="bot-section">
        <h1>Load or build your bot</h1>
        <p className="bot-description">
          Import a bot from your computer or Google Drive, build it from scratch, or start with a quick strategy.
        </p>
        
        <div className="bot-options">
          <div className="bot-option">
            <div className="bot-icon computer-icon">
              <i className="ri-computer-line"></i>
            </div>
            <p>My computer</p>
          </div>
          
          <div className="bot-option">
            <div className="bot-icon free-bots-icon">
              <i className="ri-star-fill"></i>
            </div>
            <p>FREE BOTS</p>
          </div>
          
          <div className="bot-option">
            <div className="bot-icon bot-builder-icon">
              <i className="ri-puzzle-line"></i>
            </div>
            <p>Bot Builder</p>
          </div>
          
          <div className="bot-option">
            <div className="bot-icon strategy-icon">
              <i className="ri-shapes-line"></i>
            </div>
            <p>Quick strategy</p>
          </div>
        </div>
      </div>
      
      <div className="footer">
        <div className="risk-disclaimer" onClick={toggleDisclaimer}>
          Risk Disclaimer
        </div>
      </div>

      {/* Risk Disclaimer Modal */}
      {showDisclaimer && (
        <div className="disclaimer-overlay">
          <div className="disclaimer-modal">
            <div className="disclaimer-header">
              <h3>Risk Disclaimer</h3>
              <button className="close-btn" onClick={toggleDisclaimer}>
                <i className="ri-close-line"></i>
              </button>
            </div>
            <div className="disclaimer-content">
              <p>
                Deriv offers complex derivatives, such as options and contracts for difference ("CFDs"). These products may not be suitable for all clients, and trading them puts you at risk. Please make sure that you understand the following risks before trading Deriv products:
              </p>
              <ul>
                <li>You may lose some or all of the money you invest in the trade.</li>
                <li>If your trade involves currency conversion, exchange rates will affect your profit and loss.</li>
              </ul>
              <p>
                You should never trade with borrowed money or with money that you cannot afford to lose.
              </p>
            </div>
            <div className="disclaimer-footer">
              <button className="close-button" onClick={toggleDisclaimer}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Dashboard;
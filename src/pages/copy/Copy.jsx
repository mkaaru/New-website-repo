import { useState } from 'react';
import { Header } from '../../components'
import { Navbar } from '../../components'
import { Footer } from '../../components'
import './copy.css';

const Copy = () => {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
        <Header />
        <Navbar />
        <div className="copy-trading-container">
      <div className="header">
        <h1>Add Copy Trading Tokens</h1>
        <p className="developer-text">developed by DXpert</p>
      </div>

      <div className="token-panel">
        <div className="token-input-section">
          <input type="text" className="token-input" placeholder="" />
          <button className="add-button">
            <span className="plus-icon">+</span>
          </button>
        </div>

        <div className="controls-section">
          <div className="toggle-control">
            <div
              className={`toggle-button ${isToggled ? 'toggle-active' : ''}`}
              onClick={handleToggle}
            >
              <div className="toggle-circle"></div>
            </div>
            <span className="toggle-label">On/Off</span>
          </div>

          <button className="sync-button">Sync Tokens</button>
        </div>

        <div className="action-buttons">
          <button className="create-token-button">CREATE TOKEN</button>
          <button className="edit-tokens-button">
            <span className="pencil-icon">✎</span> Edit Tokens
          </button>
        </div>

        <div className="info-section">
          <div className="info-button">
            <span className="info-icon">i</span>
          </div>
          <span className="video-text">Watch a Video on Copy Trading</span>
        </div>
      </div>

      <div className="footer">
        <div className="disclaimer-section">
          <div className="warning-icon">⚠️</div>
          <div className="disclaimer-text">Risk Disclaimer</div>
        </div>
        <div className="windows-section">
          <div className="windows-text">Activate Windows</div>
          <div className="windows-subtext">Go to Settings to activate Windows.</div>
        </div>
      </div>
    </div>
   
    </div>
  );
};

export default Copy;

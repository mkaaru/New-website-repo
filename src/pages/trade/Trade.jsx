import React, { useState, useEffect } from 'react';
import { Header } from '../../components'
import { Navbar } from '../../components'
import { Footer } from '../../components'
import './trade.css';

const Trade = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [formData, setFormData] = useState({
    startingCapital: 10,
    dailyPercentageGain: 10,
    totalDays: 5
  });
  const [tradingPlan, setTradingPlan] = useState([]);

  useEffect(() => {
    generateTradingPlan();
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value) || 0
    });
  };

  const generateTradingPlan = () => {
    const { startingCapital, dailyPercentageGain, totalDays } = formData;
    const plan = [];
    
    let currentCapital = startingCapital;
    
    for (let day = 1; day <= totalDays; day++) {
      const expectedProfit = currentCapital * (dailyPercentageGain / 100);
      const totalPnL = currentCapital + expectedProfit;
      
      plan.push({
        day,
        startingCapital: currentCapital.toFixed(2),
        expectedProfit: expectedProfit.toFixed(2),
        totalPnL: totalPnL.toFixed(2)
      });
      
      currentCapital = totalPnL;
    }
    
    setTradingPlan(plan);
  };

  const handleCloseDisclaimer = () => {
    setShowDisclaimer(false);
  };

  const handleShowDisclaimer = () => {
    setShowDisclaimer(true);
  };

  return (
     <div>
      <Header />
      <Navbar />
        <div className="trading-plan-container">
      <div className="trading-plan-card">
        <h1 className="trading-plan-title">Trading Plan Generator</h1>
        
        <div className="form-row">
          <div className="form-group">
            <label>Starting Capital ($)</label>
            <input
              type="number"
              name="startingCapital"
              value={formData.startingCapital}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-group">
            <label>Daily Percentage Gain (%)</label>
            <input
              type="number"
              name="dailyPercentageGain"
              value={formData.dailyPercentageGain}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-group">
            <label>Total Days</label>
            <input
              type="number"
              name="totalDays"
              value={formData.totalDays}
              onChange={handleInputChange}
            />
          </div>
        </div>
        
        <h2 className="plan-subtitle">Your Trading Plan</h2>
        
        <div className="table-container">
          <table className="trading-plan-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Starting Capital ($)</th>
                <th>Expected Profit ($)</th>
                <th>Total PnL ($)</th>
              </tr>
            </thead>
            <tbody>
              {tradingPlan.map((day) => (
                <tr key={day.day}>
                  <td>{day.day}</td>
                  <td>${day.startingCapital}</td>
                  <td>${day.expectedProfit}</td>
                  <td>${day.totalPnL}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="button-container">
          <button className="download-button">Download as PDF</button>
        </div>
      </div>
      
      <div className="disclaimer-badge" onClick={handleShowDisclaimer}>
        <span className="warning-icon">⚠</span> Risk Disclaimer
      </div>
      
      {showDisclaimer && (
        <div className="disclaimer-overlay">
          <div className="disclaimer-modal">
            <div className="disclaimer-header">
              <h3>Risk Disclaimer</h3>
              <button className="close-button" onClick={handleCloseDisclaimer}>×</button>
            </div>
            <div className="disclaimer-content">
              <p>
                Deriv offers complex derivatives, such as options and contracts for 
                difference ("CFDs"). These products may not be suitable for all clients,
                and trading them puts you at risk. Please make sure that you understand
                the following risks before trading Deriv products:
              </p>
              <ul>
                <li>You may lose some or all of the money you invest in the trade.</li>
                <li>
                  If your trade involves currency conversion, exchange rates will
                  affect your profit and loss.
                </li>
              </ul>
              <p>
                You should never trade with borrowed money or with money that you
                cannot afford to lose.
              </p>
            </div>
            <div className="disclaimer-footer">
              <button className="green-button" onClick={handleCloseDisclaimer}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
    
     </div>
  );
};

export default Trade;
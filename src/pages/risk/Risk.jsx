import React, { useState } from "react";
import { Navbar } from '../../components';
import { Header } from '../../components';
import { Footer } from '../../components';
import "./risk.css";
import { AlertTriangle } from "lucide-react";

const Risk = () => {
  const [input, setInput] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [stake, setStake] = useState(0);
  const [takeProfit, setTakeProfit] = useState(0);
  const [stopLoss, setStopLoss] = useState(0);
  const [consecutiveLoss, setConsecutiveLoss] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const calculateValues = (value) => {
    const numericValue = parseFloat(value);
    if (isNaN(numericValue) || numericValue <= 0) {
      setStake(0);
      setTakeProfit(0);
      setStopLoss(0);
      return;
    }

    const calculatedTakeProfit = numericValue * 0.1;
    const calculatedStake = (calculatedTakeProfit * 2) / 10;
    const calculatedStopLoss = calculatedTakeProfit * 3;

    setStake(calculatedStake);
    setTakeProfit(calculatedTakeProfit);
    setStopLoss(calculatedStopLoss);
  };

  const calculateStakeSequence = (lossCount, stakeValue) => {
    const sequence = [];
    let cumulativeLoss = 0;
    for (let i = 0; i <= lossCount; i++) {
      const value = stakeValue * Math.pow(2, i);
      sequence.push(value);
      cumulativeLoss += value;
    }
    return { sequence, cumulativeLoss };
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    calculateValues(value);
  };

  const handleButtonClick = (value) => {
    const newValue = input + value;
    setInput(newValue);
    setInputValue(newValue);
    calculateValues(newValue);
  };

  const handleClear = () => {
    setInput("");
    setInputValue("");
    setStake(0);
    setTakeProfit(0);
    setStopLoss(0);
  };

  const handleDelete = () => {
    const newValue = input.slice(0, -1);
    setInput(newValue);
    setInputValue(newValue);
    calculateValues(newValue);
  };

  const handleLossChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setConsecutiveLoss(value);
    }
  };

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  const { sequence, cumulativeLoss } = calculateStakeSequence(consecutiveLoss, stake);

  return (
    <div>
      <Header />
      <Navbar />
      <div className="calculator-container">
        <h2 className="calculator-title">Deriv Risk Calculator</h2>
        <input
          type="number"
          id="inputValue"
          value={inputValue}
          onChange={handleInputChange}
          style={{ marginLeft: "10px", padding: "5px", width: "100%" }}
          placeholder="Enter a number"
        />
        <div className="number-pad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0].map((num) => (
            <button
              key={num}
              className="number-button"
              onClick={() => handleButtonClick(num.toString())}
            >
              {num}
            </button>
          ))}
          <button className="delete-button" onClick={handleDelete}>
            DEL
          </button>
          <button className="clear-button" onClick={handleClear}>
            C
          </button>
        </div>

        <div className="values-section">
          <div className="value-item">
            <span className="value-label">Total Staked:</span>
            <span className="value-amount">{stake.toFixed(2)}</span>
          </div>
          <div className="value-item">
            <span className="value-label">Take profit:</span>
            <span className="value-amount">{takeProfit.toFixed(2)}</span>
          </div>
          <div className="value-item">
            <span className="value-label">Stop loss:</span>
            <span className="value-amount">{stopLoss.toFixed(2)}</span>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <label htmlFor="consecutiveLoss">Consecutive Loss Count:</label>
          <input
            type="number"
            id="consecutiveLoss"
            value={consecutiveLoss}
            onChange={handleLossChange}
            style={{ marginLeft: "10px", padding: "5px", width: "100%" }}
            placeholder="Enter consecutive loss count"
          />
          <p style={{ marginTop: "10px" }}>
            <strong>Stake Sequence:</strong> {sequence.map((value) => value.toFixed(2)).join(", ")}
          </p>
          <p>
            <strong>Cumulative Loss:</strong> {cumulativeLoss.toFixed(2)}
          </p>
        </div>

        <div className="calculator-description">
          This calculator helps you manage risk using a custom stake sequence on
          Deriv. Increase your stake after a loss based on a multiplier of 2.25.
        </div>

        <div className="disclaimer-button-container">
          <button className="disclaimer-button" onClick={handleModalToggle}>
            <AlertTriangle className="warning-icon" />
            Disclaimer
          </button>
        </div>

        {modalOpen && (
          <div className="modal-overlay" onClick={handleModalToggle}>
            <div
              className="modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3 className="modal-title">Disclaimer</h3>
                <button className="modal-close" onClick={handleModalToggle}>
                  &times;
                </button>
              </div>
              <div className="modal-content">
                <p>
                  This tool is for educational purposes only. Trading binary
                  options involves substantial risk and is not suitable for every
                  investor.
                </p>
                <ul className="disclaimer-list">
                  <li>Use at your own risk.</li>
                  <li>Understand your strategy fully before applying.</li>
                  <li>Past performance does not guarantee future results.</li>
                </ul>
              </div>
              <button className="modal-close-button" onClick={handleModalToggle}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Risk;
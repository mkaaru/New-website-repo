import React, { useState } from 'react';
import {
  RiMenuLine,
  RiDashboardLine,
  RiRobotLine,
  RiLineChartLine,
  RiExchangeDollarLine,
  RiBarChart2Line,
  RiRocketLine,
  RiUserFollowLine,
  RiFileList3Line,
  RiSettingsLine,
  RiCalculatorLine,
} from 'react-icons/ri';

import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="mobile-toggle" onClick={toggleNavbar}>
        <RiMenuLine />
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="/"><RiDashboardLine /><span>Dashboard</span></a></li>
        <li><a href="boteditor"><RiRobotLine /><span>Bot Editor</span></a></li>
        <li><a href="#analysistools"><RiLineChartLine /><span>Analysis Tools</span></a></li>
        <li><a href="#dtrader"><RiExchangeDollarLine /><span>D-Trader</span></a></li>
        <li><a href="charts"><RiBarChart2Line /><span>Charts</span></a></li>
        <li><a href="freebots"><RiRocketLine /><span>Free Bots</span></a></li>
        <li><a href="copytrader"><RiUserFollowLine /><span>Copy Trader</span></a></li>
        <li><a href="trading-plan"><RiFileList3Line /><span>Trading Plan</span></a></li>
        <li><a href="strategies"><RiSettingsLine /><span>Strategies</span></a></li>
        <li><a href="risk-calculator"><RiCalculatorLine /><span>Risk Calculator</span></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

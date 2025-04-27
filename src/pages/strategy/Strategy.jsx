import React, { useState } from 'react';
import { Header } from '../../components'
import { Navbar } from '../../components'
import './strategy.css';

const Strategy = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const resources = [
    {
      type: 'PDF',
      title: 'Digit Matches Strategy Guide',
      description: 'Learn different strategies for predicting digit matches in trading.',
    },
    {
      type: 'PDF',
      title: 'Accumulators Trading Guide',
      description: 'Guide on how to trade accumulators with different growth rates.',
    },
    {
      type: 'PDF',
      title: 'HOW TO USE THE EVEN ODD LDP BOT',
      description: 'Guide on how to use the LDP while trading Even Odd.',
    },
    {
      type: 'PDF',
      title: 'How to use the SNIPER KILLER M4bot',
      description: 'Guide on how to use the profitable Sniper Killer Bot.',
    },
    {
      type: 'PDF',
      title: '',
      description: '',
    },
    {
      type: 'PDF',
      title: '',
      description: '',
    },
    {
      type: 'Video',
      title: 'DERIV UNDER 6 & 7 STRATEGY',
      description: '',
      thumbnail: '/images/strategy-thumbnail-1.jpg',
    },
    {
      type: 'Video',
      title: 'DERIV MATCHES STRATEGY',
      description: '',
      thumbnail: '/images/strategy-thumbnail-2.jpg',
    }
  ];

  const filteredResources = activeTab === 'All' 
    ? resources 
    : resources.filter(resource => resource.type === (activeTab === 'PDFs' ? 'PDF' : 'Video'));

  return (
   <div>
    <Header />
    <Navbar />
     <div className="resources-container">
      <h1 className="resources-title">Educational Resources</h1>
      
      <div className="tabs-container">
        <button 
          className={`tab ${activeTab === 'All' ? 'active' : ''}`}
          onClick={() => setActiveTab('All')}
        >
          All
        </button>
        <button 
          className={`tab ${activeTab === 'PDFs' ? 'active' : ''}`}
          onClick={() => setActiveTab('PDFs')}
        >
          PDFs
        </button>
        <button 
          className={`tab ${activeTab === 'Videos' ? 'active' : ''}`}
          onClick={() => setActiveTab('Videos')}
        >
          Videos
        </button>
      </div>
      
      <div className="resources-grid">
        {filteredResources.map((resource, index) => (
          <div key={index} className="resource-card">
            {resource.type === 'PDF' ? (
              <div className="pdf-header">
                <span className="pdf-text">PDF</span>
              </div>
            ) : (
              <div className="video-thumbnail">
                <img 
                  src={resource.thumbnail} 
                  alt={resource.title} 
                />
              </div>
            )}
            <div className="resource-content">
              <h3 className="resource-title">{resource.title}</h3>
              {resource.description && (
                <p className="resource-description">{resource.description}</p>
              )}
              {resource.type === 'PDF' && (
                <span className="pdf-label">PDF</span>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {activeTab === 'All' && (
        <div className="risk-disclaimer">
          <span>Risk Disclaimer</span>
        </div>
      )}
    </div>
   </div>
  );
};

export default Strategy;
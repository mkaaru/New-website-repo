import React from 'react';
import Header from '../../components/header/Header'
import { Navbar } from '../../components';
// import { SmartChart } from '@deriv/deriv-chart';

class Bote extends React.Component {

    render() {
        return (
            <div>
                 <Header />
                 <Navbar />
            <iframe
             src="https://app.deriv.com/bot#bot_builder"
            width="100%"
            height="600"
            style={{ border: 'none' }}
            title="Deriv Bot"
          />
          </div>
        );
    }
}

export default Bote;

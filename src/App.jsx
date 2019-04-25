import React, { Component } from 'react';

import Punchbag from './components/Punchbag';
import Health from './components/Health';

import './stylesheets/App.css';
import './stylesheets/Button.css';
class App extends Component {
  state = {
    punchBag: {
      url:
        'https://cdn.shopify.com/s/files/1/1212/5824/products/Green_punch_bag_solid_logo_1024x1024.png?v=1505305327',
      class: 'healthy',
      life: 100,
    },
    name: 'favour afolayan',
  };

  reduceHealth = () => {
    this.setState(state => ({
      life: (state.punchBag.life -= 10),
    }));
  };

  refillHealth = () => {
    this.setState(state => ({
      life: (state.punchBag.life = 100),
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>Warrior's Haven</h1>
        <p>{this.state.punchBag.life}</p>
        <Punchbag values={this.state.punchBag} />
        <Health life={this.state.punchBag.life} />
        <div className="button-container">
          <button onClick={this.reduceHealth} className="punch">
            punch
          </button>
          <button className="reset" onClick={this.refillHealth}>
            reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;

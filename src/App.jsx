import React, { Component } from 'react';

import Punchbag from './components/Punchbag';
import Health from './components/Health';
import Button from './components/Button';
import './stylesheets/App.css';

class App extends Component {
  state = {punchBag: {url:'https://cdn.shopify.com/s/files/1/1212/5824/products/Green_punch_bag_solid_logo_1024x1024.png?v=1505305327',class: 'healthy',},};

  render() {
    return (
      <div className="container">
        <h1>Warrior's Haven</h1>
        <Punchbag values={this.state.punchBag} />
        <Health />
        <div className="button-container">
          <Button class="punch" name="Punch" />
          <Button class="reset" name="Reset" />
        </div>
      </div>
    );
  }
}
export default App;

import React, { Component } from 'react';
import axios from 'axios';

import Punchbag from '../presentationals/Punchbag';
import Health from '../presentationals/Health';
import Button from '../presentationals/Button';
import Person from '../presentationals/Person';

import '../../assets/stylesheets/App.css';
import '../../assets/stylesheets/Button.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      punchBag: {
        life: 100,
        changeImage: false,
      },
      showPerson: true,
      persons: [],
    };
  }

  async componentWillMount() {
    const { state } = this;
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users/',
    );
    this.setState({ persons: (state.persons = data) });
  }

  componentDidMount() {
    console.log('component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
  }

  reduceHealth = () => {
    const { punchBag } = this.state;

    punchBag.life > 0 && this.setState({ life: (punchBag.life -= 10) });

    punchBag.life === 0 &&
      this.setState({
        changeImage: (punchBag.changeImage = true),
      });
  };

  refillHealth = () => {
    const { punchBag } = this.state;

    this.setState({
      changeImage: (punchBag.changeImage = false),
      life: (punchBag.life = 100),
    });
  };

  togglePerson = () => {
    const { showPerson } = this.state;

    this.setState({ showPerson: !showPerson });
  };

  render() {
    const { punchBag, persons, showPerson } = this.state;

    return (
      <div className="container">
        <h1>Warrior's Haven</h1>
        <Punchbag values={punchBag} />
        <Health life={punchBag.life} />
        <div className="button-container">
          <Button name="punch" className="punch" onClick={this.reduceHealth} />
          <Button name="reset" className="reset" onClick={this.refillHealth} />
        </div>
        <h1>Author's Haven</h1>
        <button onClick={this.togglePerson}>toggle person</button>
        <div>
          {showPerson &&
            persons &&
            persons.map(person => {
              return <Person key={person.id} person={person} />;
            })}
        </div>
      </div>
    );
  }
}

export default App;

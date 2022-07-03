import React from 'react';
import Axios from '../service/service';

import Verb from '../verb/Verb';
import Sustantiv from '../sustantiv/Sustantiv';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ''
    };
  }

  get() {
    Axios.get('/nomen').then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }

  post() {
    Axios.post('/nomen', {
      artikel: 'das',
      nomen: 'Auto',
      plural: 'Autos'
    }).then((req, res) => {
      console.log('req', req);
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <button className="verb"
          onClick={() => { this.setState({ type: 'verb' })}}>Verb</button>
        <button className="sustantiv"
          onClick={() => { this.setState({ type: 'sustantiv' })}}>Sustantiv</button>
        <button onClick={() => { this.get()}}>Get data</button>
        <button onClick={() => { this.post()}}>Send data</button>
        <Verb type={this.state.type} />
        <Sustantiv type={this.state.type} />
      </div>
    );
  }
}

export default Menu;

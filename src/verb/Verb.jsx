import React from 'react';

class Verb extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.type === 'verb') {
      return (
        <div>
          <h1 type="text">Verben</h1><br/>
          <label type="text">Infinitiv</label>
          <input type="text" /><br/>
          <label type="text">Bedeutung</label>
          <input type="text" /><br/>
          <label type="text">Gerundium</label>
          <input type="text" /><br/>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Verb;

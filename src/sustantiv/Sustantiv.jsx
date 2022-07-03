import React from 'react';

class Sustantiv extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.type === 'sustantiv') {
      return (
        <div>
          <h1 type="text">Sustantive</h1><br/>
          <label type="text">Artikel</label>
          <input type="text" /><br/>
          <label type="text">Sustantiv</label>
          <input type="text" /><br/>
          <label type="text">Plural</label>
          <input type="text" /><br/>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Sustantiv;

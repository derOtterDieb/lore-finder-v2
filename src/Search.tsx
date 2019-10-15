import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // TODO
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Recherche :
          <input type="text" value={this.sate.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Go"/>
      </form>
    );
  }
}

export default Search;

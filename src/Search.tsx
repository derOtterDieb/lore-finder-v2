import React from 'react';
import './Search.css';
import { DebounceInput } from 'react-debounce-input';

class Search extends React.Component<{}, { value: string }> {
  constructor(props: any) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    let url = '';
    url += 'https://xivapi.com/search?string=';
    url += event.target.value.replace(/ /g, '+');
    url += '&language=fr';
    url += '&private_key=';
    url += '626567fb7cc14633bcd12bb537187597424f9176280348a0a946fe9730fe4adf';
    this.setState({value: url});
  }

  render() {
    return (
      <form className="Custom-form">
        <label>Recherche :
          <DebounceInput 
            minLength={2}
            debounceTimeout={500}
            onChange={this.handleChange} className="Custom-label"/>
        </label>
        <br/>
        <div className="Results-container">
          <Result searchValue={this.state.value}/>
        </div>
      </form>
    );
  }
}

class Result extends React.Component<{ searchValue: string }> {
  render() {
    return <div>{this.props.searchValue}</div>
  }
}

export default Search;

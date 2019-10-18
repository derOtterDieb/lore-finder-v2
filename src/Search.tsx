import React, {Component} from 'react';
import './Search.css';
import { DebounceInput } from 'react-debounce-input';
import FfxivApiResults from './components/ffxivApiResults';

class Search extends Component {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    ffxivApiResults: []
  }

  handleChange(event: any) {
    let url = '';
    url += 'https://xivapi.com/search?string=';
    url += event.target.value.replace(/ /g, '+');
    url += '&language=fr';
    url += '&private_key=';
    url += '626567fb7cc14633bcd12bb537187597424f9176280348a0a946fe9730fe4adf';
    fetch(url)
      .then(res => res.json())
      .then((data) =>{
        this.setState({ ffxivApiResults: data })
      })
      .catch(console.log)
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
          <FfxivApiResults ffxivApiResults={this.state.ffxivApiResults} />
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

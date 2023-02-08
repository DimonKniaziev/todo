import React, {Component} from "react";
import './search-panel.css';

export default class SearchPanel extends Component{
  state= {
    term: ''
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  }

  render() {
    return (
      <input placeholder="type to search" className="border-2 p-2 rounded-md w-full mr-1 focus: outline-cyan-400" value={this.state.term} onChange={this.onSearchChange}/>
    );
  }
}
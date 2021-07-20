import React, { Component } from 'react';
import './index.css';
import Searchbar from './Components/Searchbar';

class App extends Component {
  state = { 
    searchQuery: '',
  };

  onChangeQuery = query => {
    this.setState({ searchQuery : query });
  };

  render() { 
    return (
    <div className="App">
      <Searchbar onSubmit={this.onChangeQuery} />
    </div>
    );
  }
}
 
export default App;



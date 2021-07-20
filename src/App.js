import React, { Component } from 'react';
import './index.css';
import Searchbar from './Components/Searchbar';
import api from './services/pictures-api';
import ImageGallery from './Components/ImageGallery';


class App extends Component {
  state = { 
    searchQuery: '',
    pictures: [],
  };

  componentDidMount() {
    
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery : query });
  };

  fetchPictures = () => {
    api.fetchPictures(this.state.searchQuery)
    .then( picturesData => this.setState({ pictures: picturesData })
    );
  }

  render() { 
    return (
    <div className="App">
      <Searchbar onSubmit={this.onChangeQuery} />
      <ImageGallery pictures ={this.state.pictures}/>
    </div>
    );
  }
}
 
export default App;


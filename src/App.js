import React, { Component } from 'react';
import './index.css';
import Searchbar from './Components/Searchbar';
import api from './services/pictures-api';
import ImageGallery from './Components/ImageGallery';
import Loader from './Components/Loader';
import Modal from './Components/Modal';

class App extends Component {
  state = { 
    searchQuery: '',
    pictures: [],
    currentPage: 1,
    showModal: false,
    largeImageURL: '',
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures();
    };
  };

  onChangeQuery = query => {
      this.setState({
        searchQuery: query,
        currentPage: 1,
        pictures: [],
      })
  };

  fetchPictures = () => {
    const { currentPage, searchQuery } = this.state;
    const options = {
      searchQuery,
      currentPage,
    };

    this.setState({ isLoading: true });

    api
      .fetchPictures(options)
      .then(picturesData => {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...picturesData],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
        if (this.state.currentPage > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        };
      });
  };
  
  toggleModal = (img) => {
    this.setState(({ showModal, tags }) => ({
      showModal: !showModal,
      largeImageURL: img,
      tags: tags,
    }))
  }

  render() { 
    const { pictures, showModal, largeImageURL, tags } = this.state;
   
    return (
    <div className="App">

      <Searchbar onSubmit={this.onChangeQuery} />

      <ImageGallery pictures ={pictures} onPicClick={this.toggleModal} />

      {this.state.pictures.length !== 0 && !this.state.isLoading && (
          <Loader onClick={this.fetchPictures} />
        )}
       
        {showModal && (
          <Modal url={largeImageURL} alt={tags} onClose={this.toggleModal}>
            <img
              width="100%"
              height="100%"
              src={this.state.largeImageURL}
              alt={this.state.tags}
            />
          </Modal> 
      )}
    </div>
    );
  }
}
 
export default App;



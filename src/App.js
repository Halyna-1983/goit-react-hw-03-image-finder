import React, { Component } from 'react';
import './index.css';
import Searchbar from './Components/Searchbar';
import api from './services/pictures-api';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import Modal from './Components/Modal';
import Loader from 'react-loader-spinner';

class App extends Component {

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures();
    };
  };

  state = { 
    searchQuery: '',
    pictures: [],
    currentPage: 1,
    showModal: false,
    largeImageURL: '',
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

      <ImageGallery pictures ={pictures} onClick={this.toggleModal} />

      {this.state.pictures.length !== 0 && !this.state.isLoading && (
          <Button onClick={this.fetchPictures} />
        )}

{this.state.isLoading && (
          <Loader type="Bars" color="#3f51b5" className="Loader" />)}
       
      {showModal && (
          <Modal url={largeImageURL} alt={tags} onClose={this.toggleModal}>
            {/* <img
              width="100%"
              height="100%"
              src={this.state.largeImageURL}
              alt={this.state.tags}
            /> */}
          </Modal> 
      )}
    </div>
    );
  }
}
 
export default App;



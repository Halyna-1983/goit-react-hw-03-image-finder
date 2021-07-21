import React, { Component } from 'react';
import './index.css';
import Searchbar from './Components/Searchbar';
import api from './services/pictures-api';
import ImageGallery from './Components/ImageGallery';
// import Button from './Components/Button/Button';
import Modal from './Components/Modal';
import Loader from 'react-loader-spinner';


class App extends Component {
  state = { 
    searchQuery: '',
    pictures: [],
    currentPage: 1,
    error: null,
    showModal: false,
    largeImg: '',
    largeImgTags: '',
    isLoading: false,
    fetchLength: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures();
    };

    if (this.state.currentPage > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    };
  };

  onChangeQuery = query => {
      this.setState({
        searchQuery: query,
        currentPage: 1,
        pictures: [],
        error: null,
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
      .then(pictures => {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...pictures],
          currentPage: prevState.currentPage + 1,
          fetchLength: pictures.length,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };
  
  onPicClick = (pictures, tags) => {
    this.setState({ showModal: true, largeImg: pictures, largeImgTags: tags });
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  }

  // onChangeQuery = query => {
  //   this.setState({ searchQuery : query });
  // };

  // fetchPictures = () => {
  //   api.fetchPictures(this.state.searchQuery, this.state.currentPage)
  //   .then( picturesData => this.setState({ pictures: picturesData })
  //   );
  // }

  render() { 
    const { searchQuery, pictures, showModal, isLoading, error, fetchLength, largeImg, largeImgTags } = this.state;
    const shouldRenderLoadMoreButton = pictures.length > 0 && fetchLength === 12 && !isLoading;

    return (
    <div className="App">

      <Searchbar onSubmit={this.onChangeQuery} />

      <ImageGallery pictures ={pictures} onPicClick={this.onPicClick} />

      {isLoading && (
          <Loader className="Loader" color="#3f51b5" type="ThreeDots" />
        )}
        {shouldRenderLoadMoreButton && (
          <button type="button" className="Button" onClick={this.fetchPics}>
            Load more
          </button>
        )}

        {error && (
          <p style={{ textAlign: 'center' }}>
            Something went wrong. Please try again.
          </p>
        )}

        {showModal && (<Modal url={largeImg} alt={largeImgTags} onClose={this.toggleModal} />
      )}
    </div>
    );
  }
}
 
export default App;



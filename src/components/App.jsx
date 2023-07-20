import React, { Component } from 'react';
import SearchBar from './searchBar/searchBar';
import ImageGallery from './imageGallery/imageGallery';

import Button from './Button/Button';
import Loader from './Loader/Loader';

const APIKEY = '36411349-fd3335cbc8c141eadb26de171';

class App extends Component {
  state = {
    images: [],
    page: 1,
    per_page: 12,
    inputQuery: '',
    isLoading: true,
    largeImage: '',
    selectedImage: null,
    result: 0,
  };

  fetchApi = async inputQuery => {
    try {
      const { page, per_page, inputQuery } = this.state;

      const response = await fetch(
        `https://pixabay.com/api/?q=${inputQuery}&page=${page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=${per_page}}`
      );
      const data = await response.json();
      // console.log(data.totalHits);
      this.setState(prevState => ({
        ...prevState,
        images: [...prevState.images, ...data.hits],
        result: data.totalHits,
      }));
    } catch (e) {
      console.log('error', e.toString());
      this.setState(prevState => ({ ...prevState, isLoading: false }));
    } finally {
      this.setState(prevState => ({ ...prevState, isLoading: false }));
    }
  };

  async componentDidMount() {
    await this.fetchApi();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.inputQuery !== prevState.inputQuery) {
      this.setState({ isLoading: true, images: [], page: 1 });
      this.fetchApi();
    }
    if (
      this.state.inputQuery === prevState.inputQuery &&
      this.state.page !== prevState.page
    ) {
      this.fetchApi();
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.fetchApi(this.state.inputQuery);
    // this.setState(prevState => ({ ...prevState, inputQuery: '' }));
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  moreload = () => {
    this.setState(prevState => ({ ...prevState, page: prevState.page + 1 }));
  };

  handleImageClick = largeImageURL => {
    this.setState({ selectedImage: largeImageURL });
  };

  render() {
    const showMore = this.state.images.length > 12;
    const more = this.state.result > this.state.images.length;
    // const istotal = this.state.result > showMore;
    // console.log('czy ja tu', this.state.images);
    const { images, isLoading, largeImage } = this.state;

    return (
      <div>
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {isLoading && <Loader />}
        {this.state.inputQuery !== '' && !isLoading && (
          <ImageGallery images={images} largeImage={largeImage} />
        )}
        {showMore && this.state.inputQuery !== '' && more && (
          <Button onClick={this.moreload} />
        )}
      </div>
    );
  }
}

export default App;

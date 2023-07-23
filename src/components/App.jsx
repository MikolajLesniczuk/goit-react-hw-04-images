import React, { useState, useEffect } from 'react';
import { SearchBar } from './searchBar/searchBar';
import { ImageGallery } from './imageGallery/imageGallery';
import axios from 'axios';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

const APIKEY = '36411349-fd3335cbc8c141eadb26de171';

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [largeImage] = useState('');
  const [result, setResult] = useState(0);

  const fetchApi = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://pixabay.com/api/?q=${inputQuery}&page=${page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
      );
      const data = await response.json();

      setImages(prevImages => [...prevImages, ...data.hits]);

      setResult(data.totalHits);
    } catch (e) {
      console.log('error', e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line
  }, [inputQuery]);

  const handleChange = e => {
    const { value } = e.target;
    setImages([]);
    setInputQuery(value);
    setPage(1);
  };

  const moreload = async e => {
    e.preventDefault();
    const nextPage = page + 1;
    setPage(nextPage);

    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${inputQuery}&page=${nextPage}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const newImages = response.data.hits;

      setImages(prevImages => [...prevImages, ...newImages]);
      setPage(nextPage);
    } catch (error) {
      console.error('error', error.toString());
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchApi(inputQuery);
  };
  const Show = images.length > 11;
  const more = result > images.length;

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
      {isLoading && <Loader />}
      {inputQuery !== '' && !isLoading && (
        <ImageGallery images={images} largeImage={largeImage} />
      )}
      {Show && inputQuery !== '' && more && <Button moreload={moreload} />}
    </div>
  );
};

export { App };

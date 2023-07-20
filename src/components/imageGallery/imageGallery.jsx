import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './imageGallery.module.css';
import { nanoid } from 'nanoid';

class ImageGallery extends Component {
  render() {
    const { images, onImageClick } = this.props;
    return images.length > 0 ? (
      <ul className={s.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={nanoid()}
            image={image}
            onImageClick={onImageClick}
          />
        ))}
      </ul>
    ) : (
      <div className={s.noway}>
        There is nothing, please search something new
      </div>
    );
  }
}

export default ImageGallery;

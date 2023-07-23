import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './imageGallery.module.css';
import { nanoid } from 'nanoid';

const ImageGallery = ({ images, onImageClick }) => {
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
    <div className={s.noway}>There is nothing, please search something new</div>
  );
};

export { ImageGallery };

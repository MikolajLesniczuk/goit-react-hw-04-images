import React, { useState } from 'react';
import s from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

const ImageGalleryItem = ({ image }) => {
  const [showModal, setShowmodal] = useState(false);

  const openModal = () => {
    setShowmodal(true);
  };

  const closeModal = () => {
    setShowmodal(false);
  };

  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt={image.id}
        className={s.image}
        onClick={openModal}
      />
      {showModal && (
        <Modal largeImage={image.largeImageURL} closeModal={closeModal} />
      )}
    </li>
  );
};

export { ImageGalleryItem };

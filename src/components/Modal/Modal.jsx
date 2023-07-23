import React, { useEffect } from 'react';
import s from './Modal.module.css';

const Modal = ({ largeImage, closeModal }) => {
  useEffect(() => {
    const closeOnEscape = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    const handleModalClick = event => {
      if (event.target === event.currentTarget) {
        closeModal();
      }
    };

    document.addEventListener('keydown', closeOnEscape);

    const modalElement = document.querySelector(`.${s.Overlay}`);
    modalElement.addEventListener('click', handleModalClick);

    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      modalElement.removeEventListener('click', handleModalClick);
    };
  }, [closeModal]);

  return (
    largeImage && (
      <div className={s.Overlay}>
        <div className={s.Modal}>
          <img src={largeImage} alt="images" className={s.imgmodal} />
        </div>
      </div>
    )
  );
};

export { Modal };

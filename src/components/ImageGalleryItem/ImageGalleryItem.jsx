import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { image } = this.props;
    const { showModal } = this.state;

    return (
      <li className={s.ImageGalleryItem}>
        <img
          src={image.webformatURL}
          alt={image.id}
          className={s.image}
          onClick={this.openModal}
        />
        {showModal && (
          <Modal
            largeImage={image.largeImageURL}
            closeModal={this.closeModal}
          />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;

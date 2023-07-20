import React, { Component } from 'react';
// import * as basicLightbox from 'basiclightbox';
import s from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    this.closeOnEscape = event => {
      if (event.key === 'Escape') {
        this.props.closeModal();
      }
    };
    document.addEventListener('keydown', this.closeOnEscape);

    const modalElement = document.querySelector(`.${s.Overlay}`);
    modalElement.addEventListener('click', this.handleModalClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeOnEscape);
    const modalElement = document.querySelector(`.${s.Overlay}`);
    modalElement.removeEventListener('click', this.handleModalClick);
  }

  handleModalClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImage } = this.props;
    return (
      largeImage && (
        <div className={s.Overlay}>
          <div className={s.Modal}>
            <img src={largeImage} alt="images" className={s.imgmodal} />
          </div>
        </div>
      )
    );
  }
}

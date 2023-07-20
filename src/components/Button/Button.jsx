import React, { Component } from 'react';
import s from './Button.module.css';
class Button extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <button type="button" onClick={onClick} className={s.Button}>
        Load More
      </button>
    );
  }
}

export default Button;

import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner';
import s from './Loader.module.css';

class Loader extends Component {
  render() {
    return (
      <div className={s.loader}>
        <Audio
          height="120"
          width="120"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle=""
          wrapperClass=""
        />
      </div>
    );
  }
}

export default Loader;

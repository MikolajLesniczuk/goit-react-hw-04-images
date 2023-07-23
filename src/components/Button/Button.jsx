import React from 'react';
import s from './Button.module.css';
const Button = ({ moreload }) => {
  return (
    <button type="button" onClick={moreload} className={s.Button}>
      Load More
    </button>
  );
};

export { Button };

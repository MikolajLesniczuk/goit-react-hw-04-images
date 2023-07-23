import React from 'react';
import s from './searchBar.module.css';

const SearchBar = ({ handleSubmit, handleChange, inputQuery }) => {
  return (
    <header className={s.Searchbar}>
      <form onSubmit={handleSubmit} className={s.SearchForm}>
        <input
          className={s.input}
          type="text"
          name="inputQuery"
          value={inputQuery}
          // autocomplete="false"
          // autofocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
        <button type="submit" className={s.Button}>
          <span className={s.ButtonLabel}>Search</span>
        </button>
      </form>
    </header>
  );
};

export { SearchBar };

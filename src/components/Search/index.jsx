import React from 'react';
import s from './Search.module.scss';

export const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={s.wrapper}>
      <span className={s.iconSearch}>&#128269;</span>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={s.root}
        placeholder=" Поиск пиццы..."
      />
      {searchValue && (
        <span onClick={() => setSearchValue('')} className={s.clearIcon}>
          x
        </span>
      )}
    </div>
  );
};

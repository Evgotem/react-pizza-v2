import React from 'react';
import { SearchContext } from '../../App';
import s from './Search.module.scss';

export const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  return (
    <div className={s.wrapper}>
      <span className={s.iconSearch} />
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

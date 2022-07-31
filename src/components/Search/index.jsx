import React from 'react';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';
import s from './Search.module.scss';

export const Search = () => {
  const [value, setValue] = React.useState('');
  const { setSearchValue } = React.useContext(SearchContext);

  const inputRef = React.useRef();

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 400),
    [],
  );

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  return (
    <div className={s.wrapper}>
      <span className={s.iconSearch} />
      <input
        ref={inputRef}
        value={value}
        onChange={(event) => onChangeInput(event)}
        className={s.root}
        placeholder=" Поиск пиццы..."
      />
      {value && (
        <span onClick={onClickClear} className={s.clearIcon}>
          x
        </span>
      )}
    </div>
  );
};

import React from 'react';
import ReactPaginate from 'react-paginate';

import s from './Pagination.module.scss';

export const Pagination = ({onChangePage}) => {
  return (
    <ReactPaginate
      className={s.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      //pageCount - сюда идет значение из бэка, но мы просто хардкодим, потому что мокапи не умеет возвращать количество страниц
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

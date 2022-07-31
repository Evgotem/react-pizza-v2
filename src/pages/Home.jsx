import React from 'react';
import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { setCategoryId, setSortType, setPageCount } from '../redux/slices/filtersSlice';

import Categories from '../components/Categories';
import { Pagination } from '../components/Pagination';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';

export const Home = () => {
  const dispatch = useDispatch();

  const { categoryId, sortType, pageCount } = useSelector((state) => state.filters);

  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const onChangeSortType = (sortObj) => {
    dispatch(setSortType(sortObj));
  };

  const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

  const pizzas = items
    .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';
    axios
      .get(
        `https://60e0b5b96b689e001788cb8e.mockapi.io/pizzas?page=${pageCount}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((response) =>  {
        setItems(response.data);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue, pageCount]);

  const onChangePage = (number) => {
    dispatch(setPageCount(number))
  }

  return (
    <>
      <div className="content__top">
        <Categories categoryId={categoryId} setCategoryId={onChangeCategory} />
        <Sort sortType={sortType} setSortType={onChangeSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? (
          skeletons
        ) : pizzas.length === 0 ? (
          <p style={{ width: 500 }}>Сорян, по твоему запросу ничего не найдено :(</p>
        ) : (
          pizzas
        )}
      </div>

      <Pagination pageCount={pageCount} onChangePage={(number) => onChangePage(number)} />
    </>
  );
};

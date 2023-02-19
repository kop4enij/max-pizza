import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/Skeleton';

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'popular',
    sortProperty: 'rating',
  });

  React.useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://63ea2c8d3363c8700363534b.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.sortProperty}&order`,
    )
      .then((response) => response.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
          <Sort value={sortType} onClickSort={(i) => setSortType(i)} />
        </div>
        <h2 className="content__title">All pizzas</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
            : items.map((object) => <PizzaBlock key={object.id} {...object} />)}
        </div>
      </div>
    </>
  );
};

export default Home;

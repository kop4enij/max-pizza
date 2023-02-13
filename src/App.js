import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
// import pizzas from './assets/pizzas.json';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://63ea2c8d3363c8700363534b.mockapi.io/items')
      .then((response) => response.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All pizza</h2>
          <div className="content__items">
            {items.map((object) => (
              <PizzaBlock key={object.id} {...object} />
              // <PizzaBlock
              //   title={object.title}
              //   price={object.price}
              //   imageUrl={object.imageUrl}
              //   sizes={object.sizes}
              //   types={object.types}></PizzaBlock>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

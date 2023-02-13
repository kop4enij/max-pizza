import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['All', 'Meat', 'Vegeterian', 'Grill', 'Spicy', 'Calzone'];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={activeIndex === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

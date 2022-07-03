import React from 'react';

function Categories({categoryId, setCategoryId}) {

  const handleCategoryClick = (index) => {
    setCategoryId(index);
  };

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li 
            key={category} 
            onClick={() => handleCategoryClick(index)}
            className={index === categoryId ? 'active': ''}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

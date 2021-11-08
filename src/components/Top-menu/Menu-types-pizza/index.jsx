import React, { useState } from 'react';
import style from './index.module.scss';
import { categories } from 'data';
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

export const MenuTypePizza = () => {
  const [active, setActive] = useState(null);
  const [act, setAct] = useState(false);
  const activeCategoties = (index) => {
    setActive(index);
  };
  // let classStyle = cx({item_type_pizza: true, index === active ? 'active' : ''})
  return (
    <nav className={style.menu_type_pizza}>
      <ul>
        <li onClick={() => setActive(null)}>Все</li>
        {categories &&
          categories.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => activeCategoties(index)}
                className={
                  index === active
                    ? `${style.item_type_pizza} ${style.active}`
                    : style.item_type_pizza
                }
              >
                {item}
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

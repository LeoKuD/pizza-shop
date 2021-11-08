import React from 'react';
import style from './index.module.scss';

export const Price = () => {
  return (
    <div className={style.price}>
      <h3>от 15 руб.</h3>
      <span className={style.buy_container}><p>+</p> Добавить <span className={style.count}>2</span></span>
    </div>
  );
};

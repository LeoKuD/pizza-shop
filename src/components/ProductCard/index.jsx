import React from 'react';
import { CardMenu } from './CardMenu';
import style from './index.module.scss';
import { Price } from './Price';

export const ProductCard = ({ data }) => {
  return (
    <article className={style.product_card_container}>
      <figure>
        <img src={data.pizzaImg} alt="" />
        <figcaption>{data.pizzaName}</figcaption>
      </figure>
        <CardMenu />
        <Price />
    </article>
  );
};

import React from 'react';
import { ProductCard } from 'components/ProductCard';
import style from './index.module.scss';
import { data } from 'data';

export const ProductList = () => {
  return (
    <main className={style.main_container}>
      {data.map((item) => <ProductCard data={item} />
      )}
    </main>
  );
};

import React from 'react';
import style from './index.module.scss';

export const CardMenu = () => {
    return (
        <div className={style.menu_select_pizza_container}>
        <nav>
          <ul>
            <li className={style.item}>тонкое</li>
            <li className={style.item}>традиционное</li>
            <li className={style.item}>26 см.</li>
            <li className={style.item}>30 см.</li>
            <li className={style.item}>40 см.</li>
          </ul>
        </nav>
      </div>
    )
}
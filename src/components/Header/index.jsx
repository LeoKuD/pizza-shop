import React from 'react';
import style from './index.module.scss';
import logo from 'assets/img/logo.png';

export const Header = () => {
  return (
    <header>
      <div className={style.header_logo}>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <div className={style.header_logo_text}>
          <h1>TASTY PIZZA</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>
      <div className={style.header_basket}>
          <table>
              <tr>
                  <td>500 р</td>
                  <td>|</td>
                  <td>3 шт</td>
              </tr>
          </table>
      </div>
      <hr />
    </header>
  );
};

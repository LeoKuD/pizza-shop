import React from "react";
import style from './index.module.scss'

export const MenuTypePizza = () => {
    return (
        <nav className={style.menu_type_pizza}>
            <ul>
                <li className={style.item_type_pizza}>Все</li>
                <li className={style.item_type_pizza}>Мясные</li>
                <li className={style.item_type_pizza}>Вегетарианская</li>
                <li className={style.item_type_pizza}>Гриль</li>
                <li className={style.item_type_pizza}>Острые</li>
                <li className={style.item_type_pizza}>Закрытые</li>
            </ul>
        </nav>
    )
}
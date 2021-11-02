import React from "react";
import style from './index.module.scss';
import { MenuSorting } from "./Menu-sorting";
import { MenuTypePizza } from "./Menu-types-pizza";

export const TopMenu = () => {
    return (
        <div className={style.top_menu_container}>
            <MenuTypePizza />
            <MenuSorting />
        </div>
    )
}
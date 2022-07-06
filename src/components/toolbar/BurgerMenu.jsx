import React from "react";
import { stack as Menu } from "react-burger-menu";
import './BurgerMenu.css';
import {NavLink} from "react-router-dom";

export default props => {
    return (
        <Menu {...props}>
            <NavLink to='/'>
                Басты бет
            </NavLink>
            <NavLink to='/about'>
                Байланыс
            </NavLink>
            <NavLink to='/quiz'>
                Сауалнама
            </NavLink>
            <NavLink to='/baiqaular'>
                Байқаулар
            </NavLink>
            <NavLink to='/programs'>
                Бағдарламалар
            </NavLink>
        </Menu>
    );
};
import styles from './Toolbar.module.scss'
import React, {useContext, useState} from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import BurgerMenu from "./BurgerMenu";
import Button from "@mui/material/Button";
import {Context} from "../../index";

export default function Toolbar({user, isAdmin, logOut}) {
    const userState = useSelector(state => state.user);
    const [menuLists, setMenuLists] = useState([
        {name: 'Курстар', href: '/kursy'},
        {name: 'Білім беру ресурстары', href: 'znanie-resursy'},
        {name: 'Бағдарламалар', href: 'programs'},
        {name: 'Байқаулар', href: '/baiqaular'},
        {name: 'Сауалнама', href: 'quiz'},
        {name: 'Байланыс', href: 'about'}
    ]);
    const {auth} = useContext(Context);
    return <header className={styles.toolbar}>
        <div className={styles.burgerMenu}>
            <BurgerMenu pageWrapId={"page-wrap"}/>
        </div>

        <div className="container">
            <div className={styles.wrap}>
                <span className={styles.empty}></span>
                <NavLink to='/'><img className={styles.logo} src="/logo.png" alt="logo"/></NavLink>
                <ul className={styles.menuList}>
                    {menuLists.map((item, i) => (
                        <li className={styles.menuItem} key={i}><NavLink to={item.href}>{item.name}</NavLink></li>
                    ))}
                </ul>

                 <Avatar logOut={logOut} user={user} isAdmin={isAdmin}/>

            </div>
        </div>

    </header>
};


const Avatar = ({isAdmin, user, logOut}) => {
    let url = user && user.photoURL;
    if(url=== null) {
        url = 'https://1.bp.blogspot.com/-tH3A6l7xLa0/XwzDbyZwe5I/AAAAAAAAAmw/rEBK6FjHVrk3VcPChBIQ4PLv-BerC8KIACLcBGAsYHQ/s320/kullanici.png'
    }
    let path = isAdmin ? '/admin' : '/login';
    console.log(isAdmin)
    return (
        <div>

                <NavLink to={path}>
                    <img src={url} alt="avatar" className={styles.avatar}/>
                </NavLink>
            {user && <Button onClick={()=>logOut()}>шығу</Button>}

        </div>

    )
}



import styles from './Toolbar.module.scss'
import {useState} from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link, NavLink} from "react-router-dom";

export default function Toolbar() {
    const [menuLists, setMenuLists] = useState([
        {name: 'Курстар', href: 'kursy'},
        {name: 'Білім беру ресурстары', href: 'znanie-resursy'},
        {name: 'Бағдарламалар', href: 'programs'},
        {name: 'Вебинар/семинар', href: 'seminars'},
        {name: 'Сауалнама', href: 'quiz'},
        {name: 'Байланыс', href: 'about'}
    ]);
    return <div className={styles.toolbar}>
        <div className="container">
            <div className={styles.wrap}>
                <NavLink to = '/'><img className={styles.logo} src="/logo.png" alt="logo"/></NavLink>
                <ul className={styles.menuList}>
                    {menuLists.map((item, i) => (
                        <li className={styles.menuItem} key={i}><a href={item.href}>{item.name}</a></li>
                    ))}
                </ul>
                <NavLink to ='/login'><AccountCircleIcon className={styles.login}/> </NavLink>
            </div>
        </div>

    </div>
}



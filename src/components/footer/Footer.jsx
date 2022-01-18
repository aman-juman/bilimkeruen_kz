import styles from './Footer.module.scss'
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";
import {useState} from "react";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://bilimkeruen.kz/">
                bilimkeruen.kz
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const Footer = () =>{
    const [social, setSocial] = useState([
        {name: 'facebook', href: '#', icon: <FacebookOutlinedIcon />},
        {name: 'instagram', href: 'https://www.instagram.com/dina_orynbekkyzy/?utm_medium=copy_link', icon: <InstagramIcon />},
        {name: 'mailru', href: 'mailto:astana2012.kz@inbox.ru', icon: <AlternateEmailIcon />},
        {name: 'whatsapp', href: 'https://wa.me/+77014635503', icon: <WhatsAppIcon />},
        {name: 'telegram', href: 'https://t.me/', icon: <TelegramIcon />},
        {name: 'phone', href: 'tel:+77014635503', icon: <PhoneAndroidIcon />},
    ])
    return (
        <footer className={styles.footer}>
            <div className={styles.wrap}>
                <div className={styles.logo}><img src="/logo.png" alt="logo"/></div>
                <ul>
                    {social.map(item =>(
                        <li key={item.name}><a href={item.href}>{item.icon}</a></li>
                    ))}
                </ul>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </div>
        </footer>
    )
}
export default Footer
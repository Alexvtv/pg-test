import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {setAccount} from '../../../store/reducers/account/dispatchers';
import {setPopupIsActive} from '../../../store/reducers/popup/dispatchers';

import {ReactComponent as Logo} from '../../../assets/logo.svg';

import styles from './Menu.module.scss';

export const Menu = () => {
    const {accData} = useSelector(store => store.account);

    const accountHandler = () => {
        if (accData) {
            setAccount(null);
            sessionStorage.removeItem('account');
        } else {
            setPopupIsActive(true);
        }
    };

    return <div className={styles.menu}>
        <Link to={'/'} className={styles.menu__link}>
            <div className={styles.menu__logo}>
                <Logo/>
            </div>
        </Link>
        <Link to={'/news'} className={styles.menu__link}>
            <p className={styles.menu__linkInner}>Новости</p>
        </Link>
        <div className={styles.link} onClick={accountHandler}>
            <p className={styles.menu__linkInner}>{accData ? 'Выход' : 'Вход'}</p>
        </div>
    </div>;
};

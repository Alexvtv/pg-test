import React, {useState} from 'react';

import {accountCheck} from '../../../utils';

import styles from './Popup.module.scss';

import {setPopupIsActive} from '../../../store/reducers/popup/dispatchers';
import {setAccount} from '../../../store/reducers/account/dispatchers';

export const Popup = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handler = () => {
        const {user} = accountCheck({name, password});

        if (user) {
            setAccount(user);
            sessionStorage.setItem('account', JSON.stringify(user));
            setPopupIsActive(false);
        } else {
            setError(true);
            setPassword('');
        }

    };

    return <div className={styles.popup} onClick={() => setPopupIsActive(false)}>
        <div className={styles.popup__inner} onClick={e => e.stopPropagation()}>
            <div className={styles.popup__field}>
                <p>Имя:</p>
                <input value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className={styles.popup__field}>
                <p>Пароль:</p>
                <input value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            {error && <p className={styles.popup__error}>Ошибка: Данные не верны</p>}
            <button
                className={styles.popup__button}
                onClick={handler}>Авторизоваться
            </button>
        </div>
    </div>;
};

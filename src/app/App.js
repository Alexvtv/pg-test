import React, {useEffect} from 'react';
import {
    Routes,
    Route,
    BrowserRouter,
} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {Home, News, Menu, Popup} from './components';
import {accountCheck} from '../utils';
import {setAccount} from '../store/reducers/account/dispatchers';

import styles from './App.module.scss';

export const App = () => {
    const {popup, account} = useSelector(store => store);
    const {popupIsActive} = popup;
    const {accData} = account;

    const sessionAccData = JSON.parse(sessionStorage.getItem('account'));

    useEffect(() => {
        if (sessionAccData && !accData) {
            const {status} = accountCheck(sessionAccData);

            (status === 'correct')
                ? setAccount(sessionAccData)
                : sessionStorage.removeItem('account');

        }
    }, []);

    return (
        <div className={styles.app}>
            <div className={styles.app__container}>
                <BrowserRouter>
                    {popupIsActive && <Popup/>}
                    <Menu/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/news' element={<News/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
};

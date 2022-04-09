import React from 'react';
import {useSelector} from 'react-redux';

import styles from './Home.module.scss';

export const Home = () => {
    const {accData} = useSelector(store => store.account);

    return <div className={styles.greetings}>
        {`Привет, ${accData?.name || 'Гость'}`}
    </div>;
};

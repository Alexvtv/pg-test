import React from 'react';
import {useSelector} from 'react-redux';

import {Form} from './parts';
import {changeList} from '../../../store/reducers/news/dispatchers';

import styles from './News.module.scss';

export const News = () => {
    const {news, account} = useSelector(store => store);
    const {list} = news;
    const {accData} = account;

    const isAdmin = accData?.role === 'admin';
    const isUser = accData?.role === 'user';

    const publish = (index) => changeList(list.map((news, idx) => idx === index
        ? {...news, published: true}
        : news));
    const remove = (index) => changeList(list.filter((news, idx) => index !== idx));

    const resultList = isAdmin
        ? list
        : list.filter(({published}) => published);

    return <div className={styles.news}>
        {isUser && <Form/>}
        <div className={styles.news__list}>
            {resultList.map(({title, text, published}, index) => <div className={styles.news__item} key={index}>
                <p className={styles.news__title}>{title}</p>
                <p className={styles.news__text}>{text}</p>
                {isAdmin && <div className={styles.news__buttons}>
                    {!published && <button onClick={() => publish(index)}>Опубликовать</button>}
                    <button onClick={() => remove(index)}>Удалить</button>
                </div>}
            </div>)}
        </div>
    </div>;
};

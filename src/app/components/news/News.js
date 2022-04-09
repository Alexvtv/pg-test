import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import {Form, Item} from './parts';
import {changeList} from '../../../store/reducers/news/dispatchers';

import styles from './News.module.scss';

export const News = () => {
    const [searchValue, setSearchValue] = useState('');
    const {news, account} = useSelector(store => store);
    const {list} = news;
    const {accData} = account;

    const isAdmin = accData?.role === 'admin';
    const isUser = accData?.role === 'user';

    const publish = (index) => changeList(list.map((news, idx) => idx === index
        ? {...news, published: true}
        : news));
    const remove = (index) => changeList(list.filter((news, idx) => index !== idx));

    const resultList = list.filter(({text, title, published}) =>
        (title.includes(searchValue) || text.includes(searchValue)) && (published || isAdmin));

    return <div className={styles.news}>
        {isUser && <Form/>}
        <input
            className={styles.news__search}
            placeholder={'поиск'}
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}/>
        <div className={styles.news__list}>
            {resultList.map((item, index) =>
                <Item
                    key={index}
                    item={item}
                    isAdmin={isAdmin}
                    index={index}
                    publish={publish}
                    remove={remove}/>)}
        </div>
    </div>;
};

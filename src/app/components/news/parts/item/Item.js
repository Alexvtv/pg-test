import React from 'react';

import styles from './Item.module.scss';

export const Item = ({item, index, isAdmin, publish, remove}) => {
    const {title, text, published, date} = item;

    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC'
    };

    return <div className={styles.item} key={index}>
        <p className={styles.item__title}>{title}</p>
        <p className={styles.item__text}>{text}</p>
        <p className={styles.item__date}>{String(new Date(date).toLocaleString('ru', options))}</p>
        {isAdmin && <div className={styles.item__buttons}>
            {!published && <button onClick={() => publish(index)}>Опубликовать</button>}
            <button onClick={() => remove(index)}>Удалить</button>
        </div>}
    </div>;
};

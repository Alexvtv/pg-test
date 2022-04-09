import React, {useState} from 'react';

import {addNews} from '../../../../../store/reducers/news/dispatchers';

import styles from './Form.module.scss';

export const Form = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handler = () => {
        addNews({title, text});
        setText('');
        setTitle('');
    };

    return <div className={styles.form}>
        <div className={styles.form__row}>
            <p className={styles.form__label}>Заголовок:</p>
            <input value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className={styles.form__row}>
            <p className={styles.form__label}>Текст:</p>
            <textarea value={text} onChange={e => setText(e.target.value)}/>
        </div>
        <button onClick={handler}>Создать</button>
    </div>;
};

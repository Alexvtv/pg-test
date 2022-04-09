import users from '../data/users.json';

export const accountCheck = (data) => {
    const account = sessionStorage.getItem('account');
    const {name, password} = data || account || {};

    if (name && password) {
        const user = users.find(user => user.name === name);

        if (user?.password === password) {
            return {status: 'correct', user};
        }
    }

    return {status: 'error'};
};

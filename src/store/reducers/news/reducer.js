import {createSlice} from '@reduxjs/toolkit';

import * as reducers from './reducers';

export const {actions, reducer} = createSlice({
    name: 'news',
    initialState: {
        list: [
            {
                title: 'lorem 1',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                published: false
            },
            {
                title: 'lorem 2',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                published: true
            }
        ],
    },
    reducers,
});

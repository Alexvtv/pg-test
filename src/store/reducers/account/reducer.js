import {createSlice} from '@reduxjs/toolkit';

import * as reducers from './reducers';

export const {actions, reducer} = createSlice({
    name: 'account',
    initialState: {
        accData: null
    },
    reducers,
});

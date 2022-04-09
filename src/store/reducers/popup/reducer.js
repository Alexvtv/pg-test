import {createSlice} from '@reduxjs/toolkit';

import * as reducers from './reducers';

export const {actions, reducer} = createSlice({
    name: 'popup',
    initialState: {
        popupIsActive: false,
    },
    reducers,
});

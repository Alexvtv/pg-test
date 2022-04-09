import {bindActionCreators} from '@reduxjs/toolkit';
import {store} from '../../index';

const {dispatch} = store;

export const bindActions = (actionCreator) => bindActionCreators(actionCreator, dispatch);

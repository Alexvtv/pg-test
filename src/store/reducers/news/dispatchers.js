import {bindActions} from '../utils';
import {actions} from './reducer';

export const {news, addNews, changeList} = bindActions(actions);

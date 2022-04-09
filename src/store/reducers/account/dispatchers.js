import {bindActions} from '../utils';
import {actions} from './reducer';

export const {account, setAccount} = bindActions(actions);

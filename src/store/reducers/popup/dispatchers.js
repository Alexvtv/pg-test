import {bindActions} from '../utils';
import {actions} from './reducer';

export const {popupIsActive, setPopupIsActive} = bindActions(actions);

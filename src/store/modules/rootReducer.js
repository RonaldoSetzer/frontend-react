import { combineReducers } from 'redux';

import todos from './todos/reducer';
import forecast from './forecast/reducer';

export default combineReducers({ todos, forecast });

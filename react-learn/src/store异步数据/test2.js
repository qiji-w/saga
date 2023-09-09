import store from './index';
import { add } from './action/usersAction';

window.add = function () {
	store.dispatch(add());
};

window.getState = function () {
	console.log(store.getState());
};

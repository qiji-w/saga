import store from './index';
import {
	increase,
	decrease,
	asyncIncrease,
	asyncDecrease,
} from './action/counter';

window.increase = function () {
	store.dispatch(increase());
};

window.decrease = function () {
	store.dispatch(decrease());
};

window.asyncIncrease = function () {
	store.dispatch(asyncIncrease());
};

window.asyncDecrease = function () {
	store.dispatch(asyncDecrease());
};

window.getState = function () {
	console.log(store.getState());
};

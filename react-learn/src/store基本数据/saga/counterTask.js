import { takeEvery, delay, put } from 'redux-saga/effects';
import { actionTypes, increase } from '../action/counter';

function* asyncIncrease() {
	yield delay(3000);
	console.log('等待3s触发了asyncIncrease');
	put(increase()); // 使用put指令（相当于dispatch）触发（调用）action
}

function* asyncDecrease() {
	console.log('触发了asyncDecrease');
}

export default function* () {
	yield takeEvery(actionTypes.asyncIncrease, asyncIncrease);
	yield takeEvery(actionTypes.asyncDecrease, asyncDecrease);
	console.log('正在监听asyncIncrease、asyncDecrease');
}

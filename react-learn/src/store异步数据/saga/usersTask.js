import { takeEvery, put, call, apply, select, cps } from 'redux-saga/effects';
import { actionTypes, setIsLoading, fetchUsers } from '../action/usersAction';

/**
 * 回调模式的异步
 * @param {*} callback
 */
function mockStudents(condition, callback) {
	console.log('mockStudents', condition);
	setTimeout(() => {
		if (Math.random() > 0.5) {
			//nodejs风格 callback第1个参数必须填写为null，否则返回数据为undefined ！！！
			callback(null, [
				{ id: 1, loginId: 'admin', loginPwd: '123123' },
				{ id: 2, loginId: 'admin2', loginPwd: '456456' },
			]);
		} else {
			callback(new Error('出错了！！！1'), null);
		}
	}, 1000);
}

function* asyncIncrease() {
	yield put(setIsLoading(true));
	let resUsers;
	try {
		// mockStudents函数没有return，通过callback获取数据: saga指令call/apply无法识别调用回调函数，所以返回时undefined报错！
		resUsers = yield cps(mockStudents, 9999);
	} catch (err) {
		//err表示reject的内容
		console.log(err);
	}
	yield put(fetchUsers(resUsers));

	console.log('触发了asyncIncrease');

	const state = yield select();
	console.log('当前store仓库数据', state);
}

export default function* () {
	yield takeEvery(actionTypes.add, asyncIncrease);
	console.log('正在监听add');
}

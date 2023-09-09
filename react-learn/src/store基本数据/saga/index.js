// import { all } from 'redux-saga/effects';
// import counterTask from './counterTask';

// /**
//  * saga任务
//  */
// export default function* () {
// 	yield all([counterTask()]);
// 	console.log('saga 完成');
// }
import { take } from 'redux-saga/effects';
import { actionTypes } from '../action/counter';

/**
 * saga任务
 */
export default function* () {
	while (true) {
		const action = yield take(actionTypes.asyncIncrease);
		console.log('发生了异步的increase', action);
	}
}

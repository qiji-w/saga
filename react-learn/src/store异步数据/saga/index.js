import { all } from 'redux-saga/effects';
import usersTask from './usersTask';

/**
 * saga任务
 */
export default function* () {
	yield all([usersTask()]);
	console.log('saga 初始化完成');
}

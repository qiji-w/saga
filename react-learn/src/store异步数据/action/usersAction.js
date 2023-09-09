import { getAllStudents } from '../../services/student';

export const actionTypes = {
	setIsLoading: Symbol('setIsLoading'),
	add: Symbol('test-user'),
	fetchUsers: Symbol('add-user'),
};

/**
 * action creator
 * 得到一个设置是否正在加载中的action
 * @param {*} isLoading
 */
export function setIsLoading(isLoading) {
	return {
		type: actionTypes.setIsLoading,
		payload: isLoading,
	};
}
export function add() {
	return {
		type: actionTypes.add,
	};
}
export function fetchUsers(studentData) {
	return {
		type: actionTypes.fetchUsers,
		payload: studentData,
	};
}

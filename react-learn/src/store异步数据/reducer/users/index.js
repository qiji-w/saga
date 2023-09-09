import { actionTypes } from '../../action/usersAction';

const initialState = {
	isLoading: false, //是否正在加载
	datas: [], //用户数组
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.setIsLoading:
			return {
				...state,
				isLoading: payload,
			};
		case actionTypes.fetchUsers:
			return {
				...state,
				datas: [...state.datas, payload],
			};

		default:
			return state;
	}
};

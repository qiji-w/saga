import uuid from 'uuid';
/**
 * 获取所有学生
 */
export async function getAllStudents() {
	const res = new Promise((resolve, reject) => {
		setTimeout(() => {
			const data = [
				{ id: uuid(), loginId: 'admin', loginPwd: '123123' },
				{ id: uuid(), loginId: 'admin2', loginPwd: '456456' },
			];
			resolve(data);
		}, 300);
	});

	return await res;
}

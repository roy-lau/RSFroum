
export function getSession(value){
	return value = JSON.parse(sessionStorage.getItem('loginInfo'))
}

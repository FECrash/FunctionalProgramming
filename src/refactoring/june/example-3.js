// 1. fetching에 필요한 parameters, fetch function, error handling function 3가지가 같이 움직인다
// 2. 만약 새로운 비동기 함수가 추가되면?
var user = {
  id: '1',
};

const getUserData = ({ id }) => {
  const response = fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
  return response;
};

const logToSnapErrors = error => console.log(`🚫 에러가 발생했어요: ${error.message}`);

try {
  getUserData(user);
} catch (error) {
  logToSnapErrors(error);
}

// ------------------------------------------

const fetchFlow = async (param, fetchCb, errorCb) => {
  try {
    await fetchCb(param);
  } catch (error) {
    errorCb(error);
  }
};

fetchFlow(user, getUserData, logToSnapErrors);
// 3. setUserData가 추가된다면?
const setUserData = ({ id, name }) => {
  const response = fetch(`https://jsonplaceholder.typicode.com/user/${id}`, {
    method: 'POST',
    body: JSON.stringify({ id, name }),
  });
  return response;
};

fetchFlow({ ...user, name: 'newName' }, setUserData, logToSnapErrors);

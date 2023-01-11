var user = {
  id: '1',
};

async function getUserData({ id }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
}

var logToSnapErrors = error => console.log(`🚫 에러가 발생했어요: ${error.message}`);

try {
  getUserData(user);
} catch (error) {
  logToSnapErrors(error);
}

// 유저의 id를 가지고 fetch를 함, 에러가 나면 로깅
// api call과 error logging을 하나로 묶어야겠다
const fetchWithErrorLogging = async (input) => {
  try {
    const response = await fetch(input);
  } catch (e) {
    logToSnapErrors(e);
  }
}

const getUserData = ({ id }) => {
  fetchWithErrorLogging(`https://jsonplaceholder.typicode.com/users?id=${id}`)
}

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

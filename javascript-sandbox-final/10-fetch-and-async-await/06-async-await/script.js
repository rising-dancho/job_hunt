// promise.then((data) => console.log(data));
const url = 'https://api.github.com/users';

async function getPromise() {
  const res = await fetch(url); //from a url promise
  // console.log(res);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const users = await res.json();
  // console.log(users[0].login);

  // accessing a single object
  // const { login, avatar_url } = users;
  // console.log(login, avatar_url);

  // accessing array of objects
  for (let i = 0; i < 10; i += 1) {
    const { login, avatar_url } = users[i];
    console.log(login, avatar_url);
  }
}

getPromise();

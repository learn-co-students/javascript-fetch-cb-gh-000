const app = "I don't do much.";
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token 93`
  }
}).then(res => res.json()).then(json => console.log(json));

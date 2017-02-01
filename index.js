const fetch = require('isomorphic-fetch')

const token = "bf97e6ba479de69c3f7bd7cbd148211a4ab0605e";
const init = {
  headers: {
    Authorization: `token ${token}`
  }
};

fetch('https://api.github.com/user/repos', init)
  .then(res => res.json())
  .then(json => console.log(json));

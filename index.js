const fetch = require('isomorphic-fetch')

const token = "token_here";
const init = {
  headers: {
    Authorization: `token ${token}`
  }
};

fetch('https://api.github.com/user/repos', init)
  .then(res => res.json())
  .then(json => console.log(json));

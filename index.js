const token = 'f69d264557e303fb47cb1e7307ffce62b20f9fa2'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));

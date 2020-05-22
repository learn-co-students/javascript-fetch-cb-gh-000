const token = '59f2bafb5def3159366ccfa6c97ac8e224234ab4';
const url = 'https://api.github.com/user/repos';
fetch(url, {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));

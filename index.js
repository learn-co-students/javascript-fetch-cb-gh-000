const app = "I don't do much.";

Let xhr = NEW XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/repos/jquery/jquery/commits');
xhr.responseType = 'json';

xhr.onload = function() {
  console.log(xhr.response);
}

xhr.onerror = function() {
  console.log('not working.');
}

xhr.send();

fetch('https://api.github.com/repos/jquery/jquery/commits')
  .then(res => res.json())
  .then(json => console.log(json));

// Use FETCH with github's API

const token = 'kjw3kujh3u9hv3w90234387423bw43';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));

const app = "I don't do much.";
$(document).ready(function(){
  const token = '70ce63cf404be6ec89dc9af349b39d55e77e9a63'
  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
})

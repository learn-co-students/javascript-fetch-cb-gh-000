const token = '8df4b0c593f84e81d261558bf29731506a8873a2';
asd=fetch('https://api.github.com/AndylLow/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
alert(asd);

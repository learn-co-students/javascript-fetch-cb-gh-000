const token = "d0a3d956ad0adcb7bde4fb6733fbe89aaef50d58";
fetch("https://api.github.com/user/repos", {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));

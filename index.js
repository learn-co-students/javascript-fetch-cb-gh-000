let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/repos/jquery/jquery/commits');
xhr.responseType = 'json';

xhr.onLoad = function() {
	console.log(xhr.response);
};

xhr.onError = function() {
	console.log('Booo');
};

xhr.send();

// SAME AS 


fetch('https://api.github.com/repos/jquery/jquery/commits')
	.then(res => res.json())
	.then(json => console.log(json));


// OAUTH Notes

const token = "YOUR_TOKEN_HERE"
fetch('https://api.github.com/user/repos', {
	headers: {
		Authorization: `token ${token}`
	}
}).then(res => res.json()).then(json => console.log(json));
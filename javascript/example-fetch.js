'use strict';

const fetch = require("node-fetch");

let payload = {
    token_id: process.env.TOKEN_ID,
    token_secret: process.env.TOKEN_SECRET
};

fetch('https://token-api.pub.worximity.net/authenticate', { 
	method: 'POST',
	body:    JSON.stringify(payload),
	headers: { 'Content-Type': 'application/json' },
}).then(response => {
    if (response.status != 200) {
        throw Error(`Response status code wasn't 200 : ${response.status} ${response.statusText}`);
    } 
    return response.json();
}).then(json => {
    console.log(json);
}).catch(error => {
    console.log(error.message)
})
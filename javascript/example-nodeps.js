'use strict';

const https = require('https');

let payload = {
    token_id: process.env.TOKEN_ID,
    token_secret: process.env.TOKEN_SECRET
};

let options = {
    hostname: 'token-api.pub.worximity.net',
    path: '/authenticate',
    method: 'POST'
};

let request = https.request(options, (response) => {
  console.log(`Status code: ${response.statusCode}\n`);

  response.on('data', (data) => {
    process.stdout.write(data);
  });
});

request.end();



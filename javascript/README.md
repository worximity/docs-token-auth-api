# Running the examples

The examples use NodeJS > 6.6.0. To execute the examples:

* Run `npm install` from the `javascript` directory
* Make sure your environment contains the `TOKEN_ID` and `TOKEN_SECRET` variables.

For example:
```
$ git clone git@github.com:worximity/docs-token-auth-api.git
$ cd docs-token-auth-api/javascript
$ npm install
$ export TOKEN_ID=mytokenid
$ export TOKEN_SECRET=mytokensecret
```

Two examples are included.


### No dependencies

The `example-nodeps.js` shows how to issue an authentication request with no external dependencies (beyond having NodeJS installed).

```
npm run no-deps
```

### Using node-fetch

The `example-fetch.js` show how to issue the authentication request using the [`node-fetch`](https://github.com/bitinn/node-fetch) library.

```
npm run with-fetch
```

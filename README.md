The Token Auth API allows applications to obtain a new token. 

# Guidelines

* Access tokens do not expire. It's therefore unnecessary to retreive new tokens on each hit. 
* If there is a need to refresh the access token, there is no harm in doing so.
* There is a rate limit of 10 requests per minute on the `/authenticate` endpoint.


# General usage

For applications that need to authenticate using a token, it can be obtained by issuing a request on the `/authenticate` endpoint. The endpoint returns a token which can then be used to authenticate againgst other services. 

For example, using [httpie](https://httpie.org/):

```
$ http -v post https://token-api.pub.worximity.net/authenticate token_id=mytokenid token_secret=mytokensecret
POST /authenticate HTTP/1.1
Content-Type: application/json
Host: token-api.pub.worximity.net

{
    "token_id": "mytokenid",
    "token_secret": "mytokensecret"
}

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Date: Mon, 24 Apr 2017 19:35:03 GMT

{
    "access_token": "eyJhbGciOiJIUzI1NiIsI.eyJjbGllbnRfaWQiOiJ3b3J4GFiIiwiaWF0IjoxNDkzMDYyNTAzfQ.7r7K37ZoTS-dAQms9EyedNp-Dc4pzZBY"
}
```

* The request includes a JSON payload in which has both the token_id and token_secret properties. 
* The response includes an access_token value which can then be used with other services.

### Possible responses

* Status 200: All good. The response will include a JSON payload containing a new access_token
* Status 401: Either the token_id or token_secret aren't valid. 


# Examples

* [Node](javascript/README.md)
* [Command Line](cmd/README.md)
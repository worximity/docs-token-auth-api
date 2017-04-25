# Using Curl

https://curl.haxx.se/

```
$ curl -H "Content-Type: application/json" -X POST -d '{"token_id":"mytokenid","token_secret":"mytokenscret"}' https://token-api.pub.worxi
```

# Using httpie

https://httpie.org/

```
http post https://token-api.pub.worximity.net/authenticate token_id=mytokenid token_secret=mytokensecret
```

# Using wget

https://www.gnu.org/software/wget/


```
wget --post-data='{"token_id":"mytokenid","token_secret":"mytokensecret"}' --header=Content-Type:application/json -qO- "https://token-api.pub.worximity.net/authenticate"
```

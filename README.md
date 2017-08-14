# Instructions

1. Start up the server by running `node app.js`
1. Send a `POST` requests to `/test/test`
1. Observe the failure: `TypeError: Cannot convert undefined or null to object`
  - This is referencing to `sails.models` in `res.send(Object.keys(sails.models))`

## Making it work

1. Go to `Test1Service.js` in `api/services`
1. Comment out line 4
1. Start up the server by running `node app.js`
1. Send a `POST` requests to `/test/test`
1. Observe the successful response: `["test"]`

# Theory

We believe that a service that `require`s in another service (which itself `require`s in `sails`) has changed in behavior with Node version `8.3.0`. If you use NVM, run the same project in `8.2.0` and observe that even with `Test1Service.js:4` uncommented, it still works (compared to the failing case with Node `8.3.0`).

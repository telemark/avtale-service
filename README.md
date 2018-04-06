[![Build Status](https://travis-ci.org/telemark/avtale-service.svg?branch=master)](https://travis-ci.org/telemark/avtale-service)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/avtale-service.svg)](https://greenkeeper.io/)

# avtale-service

microservice for signed agreements

## API

All API calls needs an Authorization header with valid jwt

```bash
$ curl -v -H "Authorization: Bearer <INSERT TOKEN>" https://agreements.service.io/agreements/
```

### ```PUT /agreements```

Add a new agreement

### ```GET /agreements/:id```

Get a specific agreement

### ```POST /agreements/search```

Search agreements

### ```POST /agreements/:id```

Updates agreements

## Deployment - ZEIT/Now

Change content of [production.env](production.env) to match your environment.

Change content of now:alias in [package.json](package.json) to match your domains.

Deploy service.

```bash
$ npm run deploy
```

## License

[MIT](LICENSE)

![Robohash image of avtale-service](https://robots.kebabstudios.party/avtale-service.png "Robohash image of avtale-service")

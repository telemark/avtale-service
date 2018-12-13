[![Build Status](https://travis-ci.org/telemark/avtale-service.svg?branch=master)](https://travis-ci.org/telemark/avtale-service)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# avtale-service

microservice for agreements

## API

All API calls needs an Authorization header with valid jwt

```bash
$ http GET https://agreements.service.io/agreements/5ac770926ae9e948ebc0bb47 'Authorization: Bearer <INSERT TOKEN>'
```

### ```PUT /agreements```

Add a new agreement

```bash
$ http PUT https://agreements.service.io/agreements userid=12345 agreementId=98765 'Authorization: Bearer <INSERT TOKEN>'
```

### ```GET /agreements/:id```

Get a specific agreement

```bash
$ http GET https://agreements.service.io/agreements/5ac770926ae9e948ebc0bb47 'Authorization: Bearer <INSERT TOKEN>'
```

### ```POST /agreements/:id```

Updates agreement

```bash
$ http POST https://agreements.service.io/agreements/5ac770926ae9e948ebc0bb47 status=signed 'Authorization: Bearer <INSERT TOKEN>'
```

### ```POST /agreements/search```

Search agreements

```bash
$ http POST https://agreements.service.io/agreements/search status=signed 'Authorization: Bearer <INSERT TOKEN>'
```

## Deployment - ZEIT/Now

Change content of [production.env](production.env) to match your environment.

Change content of now:alias in [package.json](package.json) to match your domains.

Deploy service.

```bash
$ npm run deploy
```

## License

[MIT](LICENSE)

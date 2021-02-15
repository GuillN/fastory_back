const nJwt = require('njwt')
const secureRandom = require('secure-random')
const signingKey = secureRandom(256, {type: 'Buffer'})

exports.signIn = (username, password) => {
    if (username === "Luke" && password === "DadSucks") {
        const claims = {
            iss: `http://localhost:8081`,
            sub: `${username}`,
            scope: `self, admins`
        }
        const jwt = nJwt.create(claims, signingKey).compact()
        return {status: 200, data: jwt}
    }
    else return {status: 401, data: "Unauthorized"}
}

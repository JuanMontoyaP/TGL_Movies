const jwt = require('jsonwebtoken')


const generateJWT = (uid = '', name = '', email = '') => {

    return new Promise((resolve, reject) => {

        const payload = { uid, name, email };

        jwt.sign(payload, process.env.SECRETKEY, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('Failed to generate JWT')
            } else {
                resolve(token);
            }
        })
    })
}

module.exports = {
    generateJWT
}

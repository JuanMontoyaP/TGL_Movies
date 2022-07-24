const jwt = require('jsonwebtoken')
const User = require('../models/user')


const validateJWT = async (req, res, next) => {

    const token = req.header('Authorization')

    if (!token) {
        return res.status(401).json({
            msg: 'There is no token in the request'
        })
    }

    try {

        const { uid } = jwt.verify(token, process.env.SECRETKEY)

        const user = await User.findById(uid)

        if(!user){
            return res.status(401).json({
                msg: 'User does not exist ins db'
            })
        }

        if (user.state === false) {
            return res.status(401).json({
                msg: 'User is not active'
            })
        }

        req.user = user

        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({
            msg: 'Invalid token'
        })
    }
}

module.exports = {
    validateJWT
}
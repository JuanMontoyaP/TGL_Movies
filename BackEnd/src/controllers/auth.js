const User = require('../models/user')
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generate-jwt')

const login = async (req, res) => {

    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                msg: 'user / password are not correct - email'
            })
        }

        if (!user.status) {
            return res.status(400).json({
                msg: 'user / password are not correct - state: false'
            })
        }

        const validPassword = bcryptjs.compareSync(password, user.password)
        if (!validPassword) {
            return res.status(400).json({
                msg: 'user / password are not correct - password'
            })
        }

        const token = await generateJWT(user.id,  user.name, user.email)
        
        res.json({
            user,
            token
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Please speak with the admin'
        })
    }
}

module.exports = {
    login
}
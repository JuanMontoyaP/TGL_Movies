const User = require('../models/user')
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generate-jwt');
const { googleVerify } = require('../helpers/google-verify');

const login = async (req, res) => {

    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                msg: 'user / password are not correct'
            })
        }

        if (!user.status) {
            return res.status(400).json({
                msg: 'user / password are not correct'
            })
        }

        const validPassword = bcryptjs.compareSync(password, user.password)
        if (!validPassword) {
            return res.status(400).json({
                msg: 'user / password are not correct'
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

const googleSignIn = async (req, res) => {

    const { id_token } = req.body

    try {

        const { name, img, email } = await googleVerify(id_token)

        let user = await User.findOne({email})

        if(!user){
            const data = {
                name,
                email,
                password: 'newpassword',
                img,
                google: true,
                role: 'USER_ROLE'
            }

            user = new User(data)
            await user.save()
        }

        if(user.state === false) {
            return res.status(401).json({
                msg: 'Contact the admin, user is blocked'
            })
        }

        const token = await generateJWT(user.id)

        res.json({
            user,
            token
        })

    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: 'Token could not be verified'
        })
    }

}

module.exports = {
    login,
    googleSignIn
}
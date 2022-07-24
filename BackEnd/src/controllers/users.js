const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const usersGet = async (req, res) => {

    const query = { status: true };
    
    const [total, users] = await Promise.all([
        User.countDocuments(query),
        User.find(query)
    ])

    res.json({
        total,
        users
    })
}

const usersPost = async (req, res) => {

    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    //Encriptar el pass
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(password, salt);

    //Guardar en DB en moongose
    await user.save();

    res.json({
        user
    })
}

const usersPut = async (req, res) => {

    const { id } = req.params;
    const { _id, password, google, email, ...rest } = req.body;

    if (password) {
        //Encriptar el pass
        const salt = bcryptjs.genSaltSync(10);
        rest.password = bcryptjs.hashSync(password, salt);
    }

    const user = await User.findByIdAndUpdate(id, rest);

    res.json(user);
}

const usersDelete = async (req, res) => {

    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, { status: false });

    res.json(user)
}


module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}
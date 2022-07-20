const Role = require('../models/role');
const User = require('../models/user');

const isValidRole = async (role = '') => {
    const roleExist = await Role.findOne({ role });
    if (!roleExist){
        throw new Error(`The role ${role} is not registered in the DB`)
    }
}

const emailExist = async ( email = '' ) => {
    const uniqueEmail = await User.findOne({ email })
    if (uniqueEmail){
        throw new Error(`The email: ${email} is already registered in the DB`)
    }
}

const userExistById = async ( id ) => {
    const existId = await User.findOne({ _id: id })
    if (!existId){
        throw new Error(`The ${id} does not exist in DB`)
    }
}

module.exports = {
    isValidRole,
    emailExist,
    userExistById
}
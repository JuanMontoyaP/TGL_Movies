

const usersGet = (req, res) => {
    res.json({
        msg: 'Get Api'
    })
}

const usersPost = (req, res) => {
    res.json({
        msg: 'Post Api'
    })
}

const usersPut = (req, res) => {
    res.json({
        msg: 'Put Api'
    })
}
const usersPatch = (req, res) => {
    res.json({
        msg: 'Patch Api'
    })
}

const usersDelete = (req, res) => {
    res.json({
        msg: 'Delete Api'
    })
}


module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}
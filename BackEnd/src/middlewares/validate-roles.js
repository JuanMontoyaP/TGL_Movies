

const isAdminRole = (req, res, next) => {

    if (!req.user){
        return res.status(500).json({
            msg: 'You need to check the role first'
        })
    }

    const { role, name } = req.user

    if (role !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: `${name} is not an admin`
        })
    }
 
    next()
}

module.exports = {
    isAdminRole
}
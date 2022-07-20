const { Router } = require('express')
const { check } = require('express-validator');
const { usersGet, usersPost, usersPut, usersDelete } = require('../controllers/users')
const { isValidRole, emailExist, userExistById } = require('../helpers/db-validators');
const { validateInputs } = require('../middlewares/validate-inputs');

const router = Router()

router.get('/', usersGet)

router.put('/:id', [
    check('id', 'Is not a valid ID').isMongoId(),
    check('id').custom(userExistById),
    check('role').custom(isValidRole),
    validateInputs
], usersPut);

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'Password must have more than 5 letters').isLength({ min: 6 }),
    check('email', 'The email is not valid').isEmail(),
    check('email').custom(emailExist),
    check('role').custom(isValidRole),
    validateInputs
], usersPost);

router.delete('/:id', [
    check('id', 'Is not a valid ID').isMongoId(),
    check('id').custom(userExistById),
    validateInputs
], usersDelete);


module.exports = router

const express = require('express');
const AuthenticationController = require('../controllers/auth');
const { protect } = require('../middleware/auth.js');
const router = express.Router();

router.route('/registrar').post(UsuarioController.createUsuario);
router.route('/login').post(UsuarioController.login);
router.route('/datos').get(protect, UsuarioController.getUsuario);

module.exports = router;
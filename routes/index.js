var express = require('express');
var router = express.Router();

//import Controller
var controllerPengguna = require('../controllers/controllerPengguna')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tambah', controllerPengguna.tambah)

router.post('/proses_tambah', controllerPengguna.proses_tambah)

module.exports = router;

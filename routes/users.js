var express = require('express');
var router = express.Router();
var listado = require('../data/users.json');

/* GET users. */
router.get('/', function(req, res, next) {
  res.json(listado);
});

router.get('/:id', function(req, res, next) {
  let buscado = listado.find(item => item.id == req.params.id);
  if(buscado){
    res.json(buscado);
  }else{
    res.status(404).send('Id no econtrado o inexistente.');
  }
  
});

router.get('/view', function(req, res, next) {
  res.render('usuarios', { title: 'Usuarios' });
});


module.exports = router;

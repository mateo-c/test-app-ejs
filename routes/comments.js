var express = require('express');
var router = express.Router();
var listado = require('../data/comments.json');

/* GET comments. */
router.get('/', function(req, res, next) {
    const usuario = req.query.User;
    if(usuario){
        let array = listado.filter( item => item.postId==usuario);
        res.json(array)
    }else{
        res.json(listado);
    }
});

router.get('/view', function(req, res, next) {
    res.render('comentarios', { title: 'Comentarios' });
  });


module.exports = router;

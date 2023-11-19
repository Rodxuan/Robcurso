const express = require('express');

const modalidadesRouter = require('./modalidades');
const categoriasRouter = require('./categorias');
const integrantesRouter = require('./integrantes');
const patrocinantesRouter = require('./patrocinantes');
const equiposRouter = require('./equipos');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Concurso Robótica' });
});

router.use('/modalidades', modalidadesRouter);
router.use('/categorias', categoriasRouter);
router.use('/integrantes', integrantesRouter);
router.use('/patrocinantes', patrocinantesRouter);
router.use('/equipos', equiposRouter);


module.exports = router;

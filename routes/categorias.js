const express = require('express');
const CategoriasController = require('../controllers/categorias');

const router = express.Router();


router.post('/', async (req, res) => {
    if (req.body.categoria && req.body.modalidad) {
        const { categoria, modalidad } = req.body;

        await CategoriasController.ingresarCategoria(categoria, modalidad)
            .catch((err) => res.status(400).send({ err }))
            .then((categoria) => res.status(201).send(categoria));
    } else {
        res.status(400).send('ERROR');
    }
});

router.put('/:idCategoria', async (req, res) => {
    if (req.body.categoria && req.body.modalidad) {
        const { categoria, modalidad } = req.body;

        await CategoriasController.editarCategoria(req.params.idCategoria, categoria, modalidad)
            .catch((err) => res.status(400).send({ err }))
            .then((categoria) => res.send(categoria));
    } else {
        res.status(400).send('ERROR');
    }
});

router.delete('/:idCategoria', async (req, res) => {
    await CategoriasController.eliminarCategoria(req.params.idCategoria)
        .catch((err) => res.status(400).send({ err }))
        .then((message) => res.send({ message }));
});


module.exports = router;

const express = require('express');
const EquiposController = require('../controllers/equipos');

const router = express.Router();


router.post('/', async (req, res) => {
    if (req.body.equipo && req.body.categoria && req.body.patrocinante) {
        const { equipo, categoria, patrocinante } = req.body;

        await EquiposController.ingresarEquipo(equipo, categoria, patrocinante)
            .catch((err) => res.status(400).send({ err }))
            .then((equipo) => res.status(201).send(equipo));
    } else {
        res.status(400).send('ERROR');
    }
});

router.get('/inscripciones', async (req, res) => {
    await EquiposController.mostrarEquipoPorCategoria()
        .catch((err) => res.status(400).send({ err }))
        .then((categorias) => res.send(categorias));
});

router.get('/', async (req, res) => {
    await EquiposController.mostrarEquipos()
        .catch((err) => res.status(400).send({ err }))
        .then((equipos) => res.send(equipos));
});

router.delete('/:idEquipo', async (req, res) => {
    await EquiposController.eliminarEquipo(req.params.idEquipo)
        .catch((err) => res.status(400).send({ err }))
        .then((message) => res.send({ message }));
});

router.get('/view', async (req, res) => {
    await EquiposController.mostrarEquipos()
        .catch((err) => res.status(400).send({ err }))
        .then((equipos) => res.render('equipos', {
            title: 'Equipos',
            equipos
        }));
});

router.get('/inscripciones/view', async (req, res) => {
    await EquiposController.mostrarEquipoPorCategoria()
        .catch((err) => res.status(400).send({ err }))
        .then((categorias) => res.render('categorias', {
            title: 'Categorias',
            categorias
        }));
});


module.exports = router;

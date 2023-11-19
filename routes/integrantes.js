const express = require('express');
const IntegrantesController = require('../controllers/integrantes');

const router = express.Router();

// FALTAN HACER PRUEBAS

router.post('/', async (req, res) => {
    if (req.body.integrante && req.body.equipo) {
        const { integrante, equipo } = req.body;

        await IntegrantesController.ingresarIntegrante(integrante, equipo)
            .catch((err) => res.status(400).send({ err }))
            .then((integrante) => res.status(201).send(integrante));
    } else {
        res.status(400).send('ERROR');
    }
});

router.put('/:idIntegrante', async (req, res) => {
    if (req.body.integrante && req.body.equipo) {
        const { integrante, equipo } = req.body;

        await IntegrantesController.editarIntegrante(req.params.idIntegrante, integrante, equipo)
            .catch((err) => res.status(400).send({ err }))
            .then((integrante) => res.send(integrante));
    }
});

router.delete('/:idIntegrante', async (req, res) => {
    await IntegrantesController.eliminarIntegrante(req.params.idIntegrante)
        .catch((err) => res.status(400).send({ err }))
        .then((message) => res.send({ message }));
});


module.exports = router;

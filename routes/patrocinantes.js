const express = require('express');
const PatrocinantesController = require('../controllers/patrocinantes');

const router = express.Router();


router.get('/', async (req, res) => {
    await PatrocinantesController.mostrarPatrocinantes()
        .catch((err) => res.status(400).send({ err }))
        .then((patrocinantes) => res.send(patrocinantes));
});

router.post('/', async (req, res) => {
    if (req.body.patrocinante) {
        await PatrocinantesController.ingresarPatrocinante(req.body.patrocinante)
            .catch((err) => res.status(400).send({ err }))
            .then((patrocinante) => res.status(201).send(patrocinante));
    } else {
        res.status(400).send('ERROR');
    }
});

router.get('/view', async (req, res) => {
    await PatrocinantesController.mostrarPatrocinantes()
        .catch((err) => res.status(400).send({ err }))
        .then((patrocinantes) => res.render('patrocinadores', {
            patrocinantes,
            title: 'Patrocinadores'
        }));
})


module.exports = router;

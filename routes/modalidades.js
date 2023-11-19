const express = require('express');
const ModalidadesController = require('../controllers/modalidades');

const router = express.Router();


router.post('/', async (req, res) => {
    if (req.body.modalidad) {
        await ModalidadesController.ingresarModalidad(req.body.modalidad)
            .catch((err) => res.status(400).send({ err }))
            .then((modalidad) => res.status(201).send(modalidad));
    } else {
        res.status(400).send('ERROR');
    }
});


module.exports = router;

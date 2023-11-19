const PatrocinantesModel = require('../models/patrocinantes');


class PatrocinantesController {
    async ingresarPatrocinante(patrocinante) {
        return new Promise((resolve, reject) => {
            PatrocinantesModel.ingresarPatrocinante(patrocinante)
                .catch(() => reject('El patrocinante ya está registrado'))
                .then(() => {
                    PatrocinantesModel.mostrarPatrocinante(patrocinante)
                        .catch((err) => reject(err))
                        .then((patrocinante) => resolve(patrocinante));
                });
        });
    }

    async mostrarPatrocinantes() {
        return new Promise((resolve, reject) => {
            PatrocinantesModel.mostrarPatrocinantes()
                .catch((err) => reject(err))
                .then((patrocinantes) => resolve(patrocinantes));
        });
    }
}


module.exports = new PatrocinantesController();

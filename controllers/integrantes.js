const IntegrantesModel = require('../models/integrantes');


class IntegrantesController {
    async ingresarIntegrante(integrante, idEquipo) {
        return new Promise((resolve, reject) => {
            IntegrantesModel.ingresarIntegrante(integrante, idEquipo)
                .catch((err) => {
                    if (err.errno === 1452) reject('El equipo no está registrado');
                    else reject('El integrante ya está registrado');
                })
                .then(() => {
                    IntegrantesModel.mostrarIntegrante(integrante)
                        .catch((err) => reject(err))
                        .then((integrante) => resolve(integrante));
                });
        });
    }

    async editarIntegrante(idIntegrante, integrante, idEquipo) {
        return new Promise((resolve, reject) => {
            IntegrantesModel.mostrarIntegrantePorId(idIntegrante)
                .catch((err) => reject(err))
                .then(() => {
                    IntegrantesModel.editarIntegrante(idIntegrante, integrante, idEquipo)
                        .catch((err) => {
                            if (err.errno === 1062) reject('El integrante ya está registrado');
                            else if (err.errno === 1452) reject('El equipo no está registrado');
                        })
                        .then(() => {
                            IntegrantesModel.mostrarIntegrante(integrante)
                                .catch((err) => reject(err))
                                .then((integrante) => resolve(integrante));
                        });
                });
        });
    }

    async eliminarIntegrante(idIntegrante) {
        return new Promise((resolve, reject) => {
            IntegrantesModel.mostrarIntegrantePorId(idIntegrante)
                .catch((err) => reject(err))
                .then(() => {
                    IntegrantesModel.eliminarIntegrante(idIntegrante)
                        .catch((err) => reject(err))
                        .then(() => resolve(`Integrante elimindo (${ idIntegrante })`));
                });
        });
    }
}


module.exports = new IntegrantesController();

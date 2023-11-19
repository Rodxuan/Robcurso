const ModalidadesModel = require('../models/modalidades');


class ModalidadesController {
    async ingresarModalidad(modalidad) {
        return new Promise((resolve, reject) => {
            ModalidadesModel.ingresarModalidad(modalidad)
                .catch((err) => reject('La modalidad ya está registrada'))
                .then(() => {
                    ModalidadesModel.mostrarModalidad(modalidad)
                        .catch((err) => reject(err))
                        .then((modalidad) => resolve(modalidad));
                });
        });
    }
}


module.exports = new ModalidadesController();

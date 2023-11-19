const db = require('../database/connection');


class ModalidadesModel {
    async ingresarModalidad(modalidad) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO Modalidades (modalidad_mod) VALUES (?);', [modalidad], (err) => {
                if (err) reject(err);
                resolve();
            });
        });
    }

    async mostrarModalidad(modalidad) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM Modalidades WHERE modalidad_mod = ?;', [modalidad], (err, results) => {
                if (err) reject(err);
                if (!results.length) reject('La modalidad no está registrada');
                else resolve(results[0]);
            });
        });
    }
}


module.exports = new ModalidadesModel();

const db = require('../database/connection');


class IntegrantesModel {
    async ingresarIntegrante(integrante, idEquipo) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO Integrantes (integrante_int, id_equ_int) VALUES (?, ?);', [integrante, idEquipo], (err) => {
                if (err) reject(err);
                resolve();
            });
        });
    }

    async editarIntegrante(idIntegrante, integrante, idEquipo) {
        return new Promise((resolve, reject) => {
            db.query(
                'UPDATE Integrantes SET integrante_int = ?, id_equ_int = ? WHERE id_int = ?;',
                [integrante, idEquipo, idIntegrante],
                (err) => {
                    if (err) reject(err);
                    resolve();
                });
        });
    }

    async eliminarIntegrante(idIntegrante) {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM Integrantes WHERE id_int = ?;', [idIntegrante], (err) => {
                if (err) reject(err);
                resolve();
            });
        });
    }

    async mostrarIntegrante(integrante) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM Integrantes WHERE integrante_int = ?;', [integrante], (err, results) => {
                if (err) reject(err);
                if (!results.length) reject('El integrante no está registrado');
                else resolve(results[0]);
            });
        });
    }

    async mostrarIntegrantePorId(idIntegrante) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM Integrantes WHERE id_int = ?;', [idIntegrante], (err, results) => {
                if (err) reject(err);
                if (!results.length) reject('El integrante no está registrado');
                else resolve(results[0]);
            });
        });
    }
}


module.exports = new IntegrantesModel();

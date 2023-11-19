const db = require('../database/connection');


class PatrocinantesModel {
    async ingresarPatrocinante(patrocinante) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO Patrocinadores (patrocinador_pat) VALUES (?);', [patrocinante], (err) => {
                if (err) reject(err);
                resolve();
            });
        });
    }

    async mostrarPatrocinantes() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM Patrocinadores;', (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }

    async mostrarPatrocinante(patrocinante) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM Patrocinadores WHERE patrocinador_pat = ?;', [patrocinante], (err, results) => {
                if (err) reject(err);
                if (!results.length) reject('El patrocinador no está registrado');
                else resolve(results[0]);
            });
        });
    }
}


module.exports = new PatrocinantesModel();

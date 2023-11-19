const db = require('../database/connection');


class EquiposModel {
    async ingresarEquipo(equipo, idCategoria, idPatrocinante) {
        return new Promise((resolve, reject) => {
            db.query(
                'INSERT INTO Equipos(equipo_equ, id_cat_equ, id_pat_equ) VALUES (?, ?, ?);',
                [equipo, idCategoria, idPatrocinante],
                (err) => {
                    if (err) reject(err);
                    resolve();
                });
        });
    }

    async mostrarEquipos() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM Equipos INNER JOIN Integrantes ON id_equ = id_equ_int ORDER BY equipo_equ;', (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }

    async eliminarEquipo(idEquipo) {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM Equipos WHERE id_equ = ?;', [idEquipo], (err) => {
                if (err) reject(err);
                resolve();
            });
        });
    }

    async mostrarEquipo(equipo) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM Equipos WHERE equipo_equ = ?;', [equipo], (err, results) => {
                if (err) reject(err);
                if (!results.length) reject('El equipo no está registrado');
                else resolve(results[0]);
            });
        });
    }

    async mostrarEquipoPorId(idEquipo) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM Equipos WHERE id_equ = ?;', [idEquipo], (err, results) => {
                if (err) reject(err);
                if (!results.length) reject('El equipo no está registrado');
                else resolve(results[0]);
            });
        });
    }

    async mostrarEquiposPorCategoria() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM Equipos INNER JOIN Categorias ON id_cat_equ = id_cat ORDER BY categoria_cat;', (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }
}


module.exports = new EquiposModel();

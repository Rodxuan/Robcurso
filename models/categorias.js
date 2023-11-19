const db = require('../database/connection');


class CategoriasModel {
    async ingresarCategoria(categoria, idModalidad) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO Categorias (categoria_cat, id_mod_cat) VALUES (?, ?);', [categoria, idModalidad], (err) => {
                if (err) reject(err);
                resolve();
            });
        });
    }

    async editarCategoria(idCategoria, categoria, idModalidad) {
        return new Promise((resolve, reject) => {
            db.query(
                'UPDATE Categorias SET categoria_cat = ?, id_mod_cat = ? WHERE id_cat = ?;',
                [categoria, idModalidad, idCategoria],
                (err) => {
                    if (err) reject(err);
                    resolve();
                });
        });
    }

    async eliminarCategoria(idCategoria) {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM Categorias WHERE id_cat = ?;', [idCategoria], (err) => {
                if (err) reject(err);
                resolve();
            });
        });
    }

    async mostrarCategoria(categoria) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM Categorias WHERE categoria_cat = ?;', [categoria], (err, results) => {
                if (err) reject(err);
                if (!results.length) reject('La categoría no está registrada');
                else resolve(results[0]);
            });
        });
    }

    async mostrarCategoriaPorId(idCategoria) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM Categorias WHERE id_cat = ?;', [idCategoria], (err, results) => {
                if (err) reject(err);
                if (!results.length) reject('La categoría no está registrada');
                else resolve(results[0]);
            });
        });
    }
}


module.exports = new CategoriasModel();

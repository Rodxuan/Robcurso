const CategoriasModel = require('../models/categorias');


class CategoriasController {
    async ingresarCategoria(categoria, idModalidad) {
        return new Promise((resolve, reject) => {
            CategoriasModel.ingresarCategoria(categoria, idModalidad)
                .catch((err) => {
                    if (err.errno === 1452) reject('La modalidad no está registrada');
                    else reject('La categoria ya está registrada');
                })
                .then(() => {
                    CategoriasModel.mostrarCategoria(categoria)
                        .catch((err) => reject(err))
                        .then((categoria) => resolve(categoria));
                });
        });
    }

    async editarCategoria(idCategoria, categoria, idModalidad) {
        return new Promise((resolve, reject) => {
            CategoriasModel.editarCategoria(idCategoria, categoria, idModalidad)
                .catch((err) => {
                    if (err.errno === 1062) reject('La categoría ya está registrada');
                    else reject('La modalidad no está registrada');
                })
                .then(() => {
                    CategoriasModel.mostrarCategoria(categoria)
                        .catch((err) => reject(err))
                        .then((categoria) => resolve(categoria));
                });
        });
    }

    async eliminarCategoria(idCategoria) {
        return new Promise((resolve, reject) => {
            CategoriasModel.mostrarCategoriaPorId(idCategoria)
                .catch((err) => reject(err))
                .then(() => {
                    CategoriasModel.eliminarCategoria(idCategoria)
                        .catch((err) => reject(err))
                        .then(() => resolve(`Categoría eliminada (${ idCategoria })`));
                });
        });
    }
}


module.exports = new CategoriasController();

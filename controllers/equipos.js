const EquiposModel = require('../models/equipos');


class EquiposController {
    async ingresarEquipo(equipo, idCategoria, idPatrocinante) {
        return new Promise((resolve, reject) => {
            EquiposModel.ingresarEquipo(equipo, idCategoria, idPatrocinante)
                .catch((err) => {
                    if (err.errno === 1452) reject('Categoría o patrocinante inválido');
                    if (err.errno === 1062) reject('El equipo ya está registrado');
                })
                .then(() => {
                    EquiposModel.mostrarEquipo(equipo)
                        .catch((err) => reject(err))
                        .then((equipo) => resolve(equipo));
                });
        });
    }

    async mostrarEquipos() {
        return new Promise((resolve, reject) => {
            EquiposModel.mostrarEquipos()
                .catch((err) => reject(err))
                .then((equipos) => {
                    const equipos_integrantes = [];
                    let ultimo_equipo = 0;

                    for (const equipo of equipos) {
                        const { equipo_equ, integrante_int } = equipo;

                        if (!equipos_integrantes.length) {
                            equipos_integrantes.push({
                                equipo: equipo_equ,
                                integrantes: [integrante_int]
                            });
                        } else if (equipo_equ === equipos_integrantes[ultimo_equipo].equipo) {
                            equipos_integrantes[ultimo_equipo].integrantes.push(integrante_int);
                        } else {
                            ultimo_equipo++;
                            equipos_integrantes.push({
                                equipo: equipo_equ,
                                integrantes: [integrante_int]
                            });
                        }
                    }

                    resolve(equipos_integrantes);
                });
        });
    }

    async eliminarEquipo(idEquipo) {
        return new Promise((resolve, reject) => {
            EquiposModel.mostrarEquipoPorId(idEquipo)
                .catch((err) => reject(err))
                .then(() => {
                    EquiposModel.eliminarEquipo(idEquipo)
                        .catch((err) => reject(err))
                        .then(() => resolve(`Equipo eliminado (${ idEquipo })`));
                });
        });
    }

    async mostrarEquipoPorCategoria() {
        return new Promise((resolve, reject) => {
            EquiposModel.mostrarEquiposPorCategoria()
                .catch((err) => reject(err))
                .then((equipos) => {
                    const categorias = [];
                    let ultima_categoria = 0;

                    for (const equipo of equipos) {
                        const { equipo_equ, categoria_cat } = equipo;

                        if (!categorias.length) {
                            categorias.push({
                                categoria: categoria_cat,
                                equipos: [equipo_equ]
                            });
                        } else if (categoria_cat === categorias[ultima_categoria].categoria) {
                            categorias[ultima_categoria].equipos.push(equipo_equ);
                        } else {
                            ultima_categoria++;
                            categorias.push({
                                categoria: categoria_cat,
                                equipos: [equipo_equ]
                            });
                        }
                    }

                    resolve(categorias);
                });
        });
    }
}


module.exports = new EquiposController();

import express from 'express';
import { obtenerSuperHeroePorIdController,
    buscarSuperHeroesPorAtributoController,
    obtenerSuperHeroesMayoresDe30Controller,
    obtenerTodosLosSuperHeroesController,
    agregarSuperHeroeController,
    editarSuperHeroeController,
    eliminarSuperHeroePorIdController,
    eliminarSuperHeroePorNombreSuperHeroeController
} from '../controllers/superheroesController.mjs';

const  router = express.Router();

router.get('/heroes', obtenerTodosLosSuperHeroesController);
router.get('/heroes/mayores-30', obtenerSuperHeroesMayoresDe30Controller);
router.get('/heroes/:id', obtenerSuperHeroePorIdController);
router.get('/heroes/buscar/:atributo/:value', buscarSuperHeroesPorAtributoController);
router.post('/heroes', agregarSuperHeroeController);
router.put('/heroes/:id', editarSuperHeroeController);
router.delete('/heroes/:id', eliminarSuperHeroePorIdController);
router.delete('/heroes/nombre/:nombreSuperHeroe', eliminarSuperHeroePorNombreSuperHeroeController);
export default router;

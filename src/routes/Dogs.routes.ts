import express, { Express } from 'express'
import { getAllDogs, getOnlyOneUser, createADog, deleteOneDog } from '../controllers/dogs.controllers';

const router: Express = express();

router.get('/', getAllDogs)
router.get('/:id', getOnlyOneUser)
router.post('/', createADog)
router.put('/:id')
router.delete('/:id', deleteOneDog)

export default router;

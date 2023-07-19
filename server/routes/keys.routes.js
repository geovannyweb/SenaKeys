import {Router} from "express"
import 
{ getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser 
} from "../controllers/users.controllers.js";

import { 
 getKeys,
 getKey,
 createKey,
 updateKey,
 deleteKey
  
} from "../controllers/keys.controllers.js";

const router = Router();

// rutas para crear usuarios
router.get('/users', getUsers);

router.get('/user/:id', getUser);

router.post('/user', createUser);

router.put('/user/:id', updateUser);

router.delete('/user/:id', deleteUser);

// apartado para crear llaves

router.get('/keys', getKeys);

router.get('/key/:id', getKey);

router.post('/key', createKey);

router.put('/key/:id', updateKey); 

router.delete('/key/:id', deleteKey)




export default router;
const { Router } = require('express');
const {getDogs}=require('../controllers/getDogs')
const{getById}=require('../controllers/getById')
const {getByName}=require('../controllers/getByName')
const{postDog}=require('../controllers/postDog')
const{getTemperaments}=require('../controllers/getTemperaments')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.get('/dogs', getDogs)
router.get('/dogs/name', getByName)
router.get('/dogs/:idRaza', getById )
router.post('/dogs', postDog)
router.get('/temperaments' , getTemperaments)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

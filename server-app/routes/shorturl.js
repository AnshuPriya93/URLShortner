import express from 'express';
import { createURL,getAllURL,getByIdURL,deleteURL } from '../controller/shortURL.js';

const router = express.Router();

router.post('/shortURL', createURL);
router.get('/shortURL', getAllURL);
router.get('/shortURL/:id', getByIdURL);
router.delete('/shortURL/:id', deleteURL);

export default router;
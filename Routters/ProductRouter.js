import express from 'express';

import { createproduct, deleteproduct, getproduct, getproductbyid, updateproduct } from '../Controllers/ProductController.js';

const router = express.Router();
router.get('/getdata',getproduct);
router.get('/getdata/:id',getproductbyid)
router.post('/create',createproduct)
router.put('/update/:id',updateproduct)
router.delete('/delete/:id',deleteproduct)

export default router;
import express from 'express';

import { createproduct, getproduct, getproductbyid } from '../Controllers/ProductController.js';

const router = express.Router();
router.get('/getdata',getproduct);
router.get('/getdata/:id',getproductbyid)
router.post('/create',createproduct)

export default router;
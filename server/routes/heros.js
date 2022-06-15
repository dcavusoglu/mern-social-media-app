import express from "express";
import { getHeros, createHero, updateHero } from '../controllers/heros.js';

const router = express.Router();

router.get('/', getHeros);
router.post('/', createHero);
router.patch('/:id', updateHero);
export default router

import express from "express";
import { getHeros, createHero, updateHero, deleteHero } from '../controllers/heros.js';

const router = express.Router();

router.get('/', getHeros);
router.post('/', createHero);
router.patch('/:id', updateHero);
router.delete('/:id', deleteHero);
export default router

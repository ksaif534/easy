import express from 'express';
import { getLearningSpaces,getLearningSpace, createLearningSpace } from '../controllers/learningSpacesController.js';

const router = express.Router();

router.get(`/`,getLearningSpaces);
router.get(`/:id/learning-space`,getLearningSpace);
router.post(`/create-learning-space`,createLearningSpace);

export default router;
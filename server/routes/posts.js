import express from 'express';
import { createPost, fetchPosts } from '../controllers/postsController.js';

const router = express.Router();

router.post(`/create-post`,createPost);
router.get(`/`,fetchPosts);

export default router;

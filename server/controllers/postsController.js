import mongoose from 'mongoose';
import Post from '../models/post.js';

export const createPost = async (req,res) => {
    try {
        const newPost = req.body;
        const query = await Post.create(newPost);
        res.status(200).json(query);
    } catch (error) {
        console.log(error);
    }
}

export const fetchPosts = async (req,res) => {
    try {
        const query = await Post.find({});
        res.status(200).json(query);
    } catch (error) {
        console.log(error);
    }
}
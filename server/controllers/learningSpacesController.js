import mongoose from 'mongoose';
import learningSpace from '../models/learningSpace.js';

export const getLearningSpaces = async (req,res) => {
    try {
        const query = await learningSpace.find();
        res.status(200).json(query);
    } catch (error) {
        console.log(error);
    }
}

export const getLearningSpace = async (req,res) => {
    try {
        const {id:_id} = req.params;
        if (mongoose.Types.ObjectId.isValid(_id)) {
            const query = await learningSpace.findById(_id);
            res.status(200).json(query);
        }else{
            res.status(400).json({message:`Invalid Id:${_id}`});
        }
    } catch (error) {
        console.log(error);
    }
}

export const createLearningSpace = async (req,res) => {
    try {
        const learningSpaceRecord = req.body;
        const newLearningSpaceRecord = await learningSpace.create(learningSpaceRecord);
        res.status(200).json(newLearningSpaceRecord);
    } catch (error) {
        console.log(error);
    }
}
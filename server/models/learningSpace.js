import mongoose from 'mongoose';

const learningSpaceSchema = mongoose.Schema({
    title: String,
    numberOfMembers: Number | String,
    lastUpdate: {
        type: Date,
        default: new Date()
    },
    thumbnail: Object | String
})

const learningSpace = mongoose.model('learningSpaces',learningSpaceSchema);

export default learningSpace;
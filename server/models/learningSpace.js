import mongoose from 'mongoose';

const learningSpaceSchema = mongoose.Schema({
    title: String,
    numberOfMembers: {
        type: mongoose.Schema.Types.Mixed
    },
    lastUpdate: {
        type: Date,
        default: new Date()
    },
    thumbnail: {
        type: mongoose.Schema.Types.Mixed
    }
})

const learningSpace = mongoose.model('learningSpaces',learningSpaceSchema);

export default learningSpace;
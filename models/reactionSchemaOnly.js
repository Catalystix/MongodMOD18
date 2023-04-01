const mongoose = require('mongoose');
mongoose.set('toJSON', { getters: true });


const reactionSchema = new mongoose.Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionText: {
            type: String,
            required: true,
            maxlength: 280,
            minlenght: 1,
            trim: true,
        },

        createdAt: {
            type: Date,
            default: Date.now,
        },
        userName: {
            type: String,
            required: true,
        },
    });

    module.exports = reactionSchema;
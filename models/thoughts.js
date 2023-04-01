const {Schema, model } = require('mongoose');
const reactionSchema = require('./reactionSchemaOnly');

mongoose.set('toJSON', { getters: true });

// creating the schema
const thoughtSchema = new mongoose.Schema(
    {
        thoughtId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        thoughtText: {
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
        reactions: [
            {
                type: schema.Types.ObjectId,
                ref: reactionSchema,
            },
        ],

    });

const thoughts = model('thoughts', thoughtSchema);

module.exports = thoughtSchema;
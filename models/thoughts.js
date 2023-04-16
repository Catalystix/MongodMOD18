const {Schema, model, Types } = require('mongoose');
const reactionSchema = require('./reactionSchemaOnly');



// creating the schema
const thoughtSchema = new Schema(
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
        reactions: [reactionSchema],

        
    },
    {toJSON: { getters: true },
});

const Thoughts = model('Thoughts', thoughtSchema);

module.exports = Thoughts;
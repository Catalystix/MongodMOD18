const mongoose = require('mongoose');
const thoughtSchema = require('./thoughts');

// creating the schema
const userSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String, validate: validator,
      required: true,
      unique: true,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts',
      },
    ],
    friends: [
      {
      type: schema.Types.ObjectId,
      ref: userSchema,
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },

  });

 

module.exports = userSchema;

  // lastAccessed: { type: Date, default: Date.now },
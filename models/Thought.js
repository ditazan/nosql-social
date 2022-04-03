const { Schema, model } = require("mongoose");
const ReactionSchema= require('./Reaction');

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    Required: true,
    min: [1, "Please make your though a bit longer !"],
    max: [128, "Thought is too long !"],
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
  username: [
    {
      type: String,
      Required: true,
    },
  ],
  reactions: [ReactionSchema],
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
});

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
const Thought = model('Thought',ThoughtSchema)

module.exports = Thought
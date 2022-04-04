const { Schema, model, Types } = require("mongoose");
const ReactionSchema= require('./Reaction');
const dateFormat = require("../utils/dateFormat");

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
      trim:true
    },
  ],
  reactions: [ReactionSchema],
},
{
  toJSON: {
    virtuals: true,
    getters:true
  },
  id: false,
});

ReactionSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});
const Thought = model('Thought',ThoughtSchema)

module.exports = Thought;
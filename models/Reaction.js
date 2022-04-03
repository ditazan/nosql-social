const { Schema, Types } = require("mongoose");

const ReactionSchema = new Schema({
  reactionID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    max: [280, "Reaction is too long !"],
  },
  username: { type: String, required: "Username is required " },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = ReactionSchema;

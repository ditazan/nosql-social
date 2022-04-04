const { Thought, User } = require("../models");

const thoughtController = {
  getThoughts(req, res) {
    Thought.find({})
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(500).json({ message: "No thoughts were found !" });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  getThought({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(500).json({ message: "No thoughts were found !" });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  newThought({ body }, res) {
    Thought.create(body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.json(400).json(err));
  },

  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No Thought found !" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(440).json(err));
  },

  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No Thought found !" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },

  newReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $push: { reactions: body } },
        { new: true, runValidators: true }
      )
        .then(data => {
          if (!data) {
            res.status(404).json({ message: `Unable to add a Reaction.` });
            return;
          }
          res.json(data);
        })
        .catch(err => res.json(err));
    },

  deleteReaction({ params }, res) {
    Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $pull: { reactions: body } },
        { new: true, runValidators: true }
        )
        .then(data => {
          if (!data) {
            res.status(404).json({ message: `No Thought record found with id: ${params.id}` });
            return;
          }
          res.json(data);
        })
        .catch(err => res.status(400).json(err));
      } 
      ,
};

module.exports= thoughtController;
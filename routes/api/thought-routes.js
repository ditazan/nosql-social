const {getThought, getThoughts, newThought, updateThought, deleteThought, deleteReaction, newReaction} = require("../../controllers/thought-controller");
const router = require('express').Router()


// /api/thoughts
router
  .route('/')
  .get(getThoughts)
  .post(newThought);

// /api/thoughts/<id>
router
    .route('/:id')
    .get(getThought)
    .put(updateThought)
    .delete(deleteThought);
  



// /api/thought/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(newReaction)
  .delete(deleteReaction);

// /api/thoughts/:thoughtId/reactionId
// router
//   .route('/:thoughtId/reactions/:reactionId')


module.exports = router;
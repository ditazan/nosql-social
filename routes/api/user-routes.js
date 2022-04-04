const {getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require("../../controllers/user-controller");
const router = require('express').Router()


// /api/Users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser)

// /api/Users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser)

router
  .route('/:id/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend)

module.exports = router;
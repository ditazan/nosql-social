const { User } = (require = "../models");

const userController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
    .populate({
      path: 'thoughts',
      select: '-__v'
    })
    .populate({
      path: 'friends',
      select: '-__v'
    })
    .select('-__v')
      .sort({ userId: -1 })  // sort in DESC order
      .then(data => res.json(data))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get single user
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
    .populate({
      path: 'thoughts',
      select: '-__v'
    })
    .populate({
      path: 'friends',
      select: '-__v'
    })
    .select('-__v')
      .then(data => {
        if (!data) {
          res.status(404).json({ message: `No user record found with id: ${params.id}` });
          return;
        }
        res.json(data);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // create user
  createUser({ body }, res) {
    User.create(body)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  //edit user
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
    .then(data => {
      if (!data) {
        res.status(404).json({ message: `No user record found with id: ${params.id}` });
        return;
      }
      res.json(data);
    })
    .catch(err => res.status(400).json(err));
},

  //delete user
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id !" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      { $push: { friends: params.friendId } },
      { new: true, runValidators: true }
    )
    .populate({
      path: 'friends',
      select: '-__v'
    })
    .select('-__v')
    .then(data => {
      if (!data) {
        res.status(404).json({ message: `No user record found with id: ${params.id}` });
        return;
      }
      res.json(data);
    })
    .catch(err => res.json(err));
}, 

  deleteFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      { $pull: { friends: params.friendId } },
      { new: true, runValidators: true })
    .populate({
      path: 'friends',
      select: '-__v'
    })
    .select('-__v')
    .then(data => {
      if (!data) {
        res.status(404).json({ message: `No user record found with id: ${params.id}` });
        return;
      }
      res.json(data);
    })
    .catch(err => res.status(400).json(err));
  } 
};

module.exports = userController;

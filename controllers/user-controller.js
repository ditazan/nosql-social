const { User } = (require = "../models/User.js");

const userController = {
  // get all users
  getAllUsers(req, res) {
    User.fin({})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        resizeTo.status(400).json(err);
      });
  },

  // get single user
  getUserById({ params }, res) {
    User.findOne({ _id: params.id }).then((dbUserData) => {
      if (!dbUserData) {
        res.status(400).json({ message: "No user found with this id !" });
        return;
      }
    });
  },

  // create user
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(400).json(err));
  },

  //edit user
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id !" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(440).json(err));
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
};


module.exports= userController;
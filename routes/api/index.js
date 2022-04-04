const router = require("express").Router();
const thoughtRouter = require("./thought-routes");
const userRoutes = require("./user-routes");

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRouter);

module.exports = router;

const router = require("express").Router();
const bookRoutes = require("./subs");

// Book routes
router.use("/subs", subsRoutes);

module.exports = router;

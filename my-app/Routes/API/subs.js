const router = require("express").Router();
const booksController = require("../../controllers/subsController");

// Matches with "/api/books"
router.route("/")
  .get(subsController.findAll)
  .post(subsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(subsController.findById)
  .put(subsController.update)
  .delete(subsController.remove);

module.exports = router;

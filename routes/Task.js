const router = require("express").Router();
const taskControllers = require("../Controllers/Task");

router.get("/", taskControllers.index);

router.post("/create", taskControllers.create);

router.get("/todoUpdate/:id", taskControllers.edit);

router.put("/update/:id", taskControllers.update);

router.delete("/delete/:id", taskControllers.delete);

module.exports = router;

///sssss

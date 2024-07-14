const Task = require("../modules/Task");
module.exports = {
  index: async (req, res) => {
    await Task.find({}).then((elm) => {
      res.render("todo", { tasks: elm });
    });
  },
  create: async (req, res) => {
    await Task.create(req.body).then(() => {
      res.redirect("/");
    });
  },
  edit: async (req, res) => {
    const id = req.params.id;
    await Task.find({}).then((elm) => {
      res.render("todoUpdate", { tasks: elm, taskId: id });
    });
  },
  update: async (req, res) => {
    id = req.params.id;
    await Task.findByIdAndUpdate(id, { title: req.body.title }).then(() => {
      res.redirect("/");
    });
  },
  delete: async (req, res) => {
    await Task.deleteOne({ _id: req.params.id }).then(() => {
      res.redirect("/");
    });
  },
};

const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
  app.get("/healthcheck", (req, res) => {
    res.send("Everything ok");
  });
  app.post("/api/author", AuthorController.createAuthor);
  app.get("/api", AuthorController.findAuthor);
  app.get("/api/author/:authorId", AuthorController.findOneAuthor);
  app.put("/api/author/:authorId", AuthorController.updateAuthor);
  app.delete("/api/author/:authorId", AuthorController.deleteAuthor);
};

const Author = require("../models/author.model");

module.exports.index = (req, res) => {
  res.json({ message: "Hello World" });
};

module.exports.createAuthor = (request, response) => {
  const { name } = request.body;

  Author.create({
    name,
  })
    .then((author) => response.json(author))
    .catch((err) => {
      console.log("Mongoose Error:");
      console.log(err);
      response.status(400).json({ errors: err });
    });
};
module.exports.findAuthor = (req, res) => {
  Author.find()
    .then((allAuthors) => res.json({ author: allAuthors }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneAuthor = (req, res) => {
  Author.findOne({ _id: req.params.authorId })
    .then((oneAuthor) => res.json({ author: oneAuthor }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateAuthor = (req, res) => {
  const { body } = req;
  Author.findOneAndUpdate({ _id: req.params.authorId }, body, {
    new: true,
    runValidators: true,
    context: "query",
  })
    .then((updatedAuthor) => res.json({ author: updatedAuthor }))
    .catch((err) => {
      response.status(400).json({ errors: err });
    });
};

module.exports.deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.authorId })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

const express = require("express");
const { ObjectId } = require("mongodb");

const handleError = (res) => {
  return (err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err });
  };
};

const createRouter = function (collection) {
  const router = express.Router();
  router.get("/", (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch(handleError(res));
  });

  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    collection
      .deleteOne({ _id: new ObjectId(id) })
      .then((result) => res.json(result))
      .catch(handleError(res));
  });
  router.post("/", (req, res) => {
    const data = req.body;
    collection
      .insertOne(data)
      .then((result) => res.json({ _id: result.insertedId }))
      .catch(handleError(res));
  });
  return router;
};
module.exports = createRouter;

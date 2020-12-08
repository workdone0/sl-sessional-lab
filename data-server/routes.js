const route = require("express").Router();

const Notice = require("./model");

route.get("/", async (req, res) => {
  try {
    const found = await Notice.find();
    res.json(found);
  } catch (err) {
    console.log(err);
  }
});

route.post("/", async (req, res) => {
  const item = new Notice({
    date: req.body.date,
    title: req.body.title,
    body: req.body.body,
    publication_status: req.body.status,
  });
  try {
    const result = await item.save();
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;

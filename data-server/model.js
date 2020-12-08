const mongoose = require("mongoose");

const NoticeModel = mongoose.model(
  "notice",
  mongoose.Schema({
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    publication_status: {
      type: String,
      required: true,
    },
  })
);

module.exports = NoticeModel;

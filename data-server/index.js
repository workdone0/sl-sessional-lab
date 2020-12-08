const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

handler = require("./routes");

mongoose
  .connect(
    "mongodb+srv://workdone0:workdone0@cluster0.ai9ts.mongodb.net/noticeboard?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("[INFO] Connected to database."))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api/notice", handler);

const PORT = 3000;

app.listen(PORT, console.log(`[INFO] Listening at ${PORT}`));

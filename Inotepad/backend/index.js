import express from "express";
import connectToMongo from "./db.js";
import authRouter from "../backend/routes/auth.js";
import notesRouter from "../backend/routes/notes.js";

connectToMongo();
const app = express();
const port = 3000;

// middleware  for res.body data
app.use(express.json());

// Avialable Routes

app.use("/api/auth", authRouter);
app.use("/api/notes", notesRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

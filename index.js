import express from "express";

const app = express();
app.use(express.json());

const users = [];

app.post("/sign-up", (req, res) => {
  const data = req.body;
  users.push(data);
  res.json({ msg: "OK" }).status(201);
});

app.listen(4000, () =>
  console.log("Server up and running at port 4000", users)
);

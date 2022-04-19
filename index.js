import express from "express";

const app = express();
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
  const data = req.body;
  users.push(data);
  res.json({ msg: "OK!" }).status(201);
});

app.post("/tweets", (req, res) => {
  const data = req.body;
  tweets.push(data);
  res.json({ msg: "OK!" }).status(201);
});

app.get("/tweets", (req, res) => {
  const lastTweets = [];
  for (
    let i = tweets.length > 10 ? tweets.length - 10 : 0;
    i < tweets.length;
    i++
  ) {
    const userIndex = users.findIndex(
      (user) => user.username === tweets[i].username
    );
    lastTweets.push({ ...tweets[i], avatar: users[userIndex].avatar });
  }
  res.json(lastTweets).status(201);
});

app.listen(4000, () =>
  console.log("Server up and running at port 4000", users)
);

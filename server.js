require("dotenv").config();

const express = require("express");
const path = require("path");
const { connectToDb } = require("./lib/database");
const { getCollection } = require("./lib/serverMethods");
const app = express();
const port = process.env.PORT || 4200;
const admin = require("./routes/admin");
const dj = require("./routes/dj");
const user = require("./routes/user");
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "https://kirmes-stahlhofen.herokuapp.com:3000",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  },
});

io.on("connection", (socket) => {
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
});

app.use(express.json());

app.use("/api/admin", admin);
app.use("/api/dj", dj);
app.use("/api/user", user);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

//eslint-disable-next-line
app.use((error, req, res, next) => {
  res.json({
    message: "An unexpected server error occured. Please try again later.",
  });
});

async function run() {
  console.log("Connecting to Database...");
  await connectToDb(process.env.DB_URI, process.env.DB_NAME);
  console.log("Connected to Database");

  http.listen(port, () => {
    console.log(`Listening at http://localhost:${port}.`);
  });
}

run();

const express = require("express");
const { MongoClient, ServerApiVersion, CURSOR_FLAGS } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const students = [
  { name: "Rasheduzzaman", id: 1, favSub: "Biology" },
  { name: "Fariha Tabassum", id: 2, favSub: "Physics" },
  { name: "Sumi Akter", id: 3, favSub: "Mathematics" },
];

const uri =
  "mongodb+srv://dBusers:eGPoPbZyvdc8EeAl@cluster0.hnxcxtq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("database connect");
  client.close();
});

app.get("/students", (req, res) => {
  res.send(students);
});

app.post("/students", (req, res) => {
  console.log("post api call");
  const student = req.body;
  student.id = students.length + 1;
  students.push(student);
  res.send(student);
  console.log(student);
});

app.get("/", (req, res) => {
  res.send("Simple node js connecting 2023");
});

app.listen(port, () => {
  console.log("Simple node js connecting", port);
});

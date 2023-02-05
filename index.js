const express = require("express");
const { MongoClient, ServerApiVersion, CURSOR_FLAGS } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const students = [
  { name: "Rasheduzzaman", favSub: "Biology" },
  { name: "Fariha Tabassum", favSub: "Physics" },
  { name: "Sumi Akter", favSub: "Mathematics" },
];

const uri =
  "mongodb+srv://dBusers:eGPoPbZyvdc8EeAl@cluster0.hnxcxtq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    const studentCollection = client.db("simpleNode").collection("students");

    app.get("/students", async (req, res) => {
      const cursor = await studentCollection.find({}).toArray();
      res.send(cursor);
    });
    app.post("/students", async (req, res) => {
      const student = req.body;
      const result = await studentCollection.insertOne(student);
      student.id = result.insertedId;
      res.send(student);
    });
  } finally {
    // await client.close();
  }
}
run().catch((err) => {
  console.log(err);
});
// app.get('/users', (req, res) => {
//     if(req.query.name){
//         const search = req.query.name;
//         const filtered = users.filter(usr => usr.name.toLowerCase().   indexOf(search) >= 0);
//         res.send(filtered);
//     }
//     else {
//         res.send(users);
//     }

// });

// app.post("/students", (req, res) => {
//   console.log("post api call");
//   const student = req.body;
//   student.id = students.length + 1;
//   students.push(student);
//   res.send(student);
//   console.log(student);
// });

app.get("/", (req, res) => {
  res.send("Simple node js connecting 2023");
});

app.listen(port, () => {
  console.log("Simple node js connecting", port);
});

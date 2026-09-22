const express = require("express");
const app = express();

const nav = `
<a href="/"><button>Home</button></a>
<a href="/students"><button>Students</button></a>
<a href="/about"><button>About</button></a><hr>`;

app.get("/", (req, res) =>
  res.send(nav + "<h1>Student Server</h1>")
);

app.get("/students", (req, res) =>
  res.send(nav + "<h1>Students</h1><p>Srikar<br>Ravi<br>Rahul<br>Anu<br>Priya</p>")
);

app.get("/about", (req, res) =>
  res.send(nav + "<h1>About</h1><p>Student Management Application</p>")
);

app.listen(3000, () => console.log("Server running"));
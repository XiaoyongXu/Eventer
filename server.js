const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const ENV = process.env.ENV || "development";
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/login', (req, res) => {
  knex('users')
    .select('*')
    .where('email',req.body.email)
    .first()
    .then((row)=>{
      if (row){
        if (row.password === req.body.password){
          res.send(row)
        }
      }
    })
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.Title}`,
  );
});

app.get("/demo", (req, res) => {
  var data = [
    { id: 1, name: "Tony", job: "Project Manager" },
    { id: 2, name: "Rohit", job: "Mentor" },
  ];
  res.send({ data: data });
});

app.get("/test", (req, res) => {
  knex('users')
    .select('*')
    .then(function (rows) {
      rows.forEach(row => {
        console.log(row)
      })
      res.redirect("/demo");
    })
})



app.listen(port, () => console.log(`Listening on port ${port}`));

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const ENV = process.env.ENV || "development";
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.get("/events", (req, res) => {
  knex('events')
    .select('*')
    .then(function (rows) {
      let events=[]
      rows.forEach(
        row => {
          events.push(row)
        }
      )
      return events;
      })
    .then(events=>{
      res.send(events)
    })
});

app.post('/login', (req, res) => {
  if (req.body.googleid){
    knex('users')
      .select('*')
      .where('email', req.body.email)
      .first()
      .then(row => {
        if (row) {
          if (row.googleid === req.body.googleid) {
            res.send(row);
          }
        }else{
          knex('users').insert({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            googleid:req.body.googleid,
            isAdmin:false
          }).then(()=>{
            res.send({first_name: req.body.first_name, isAdmin:false, id:req.body.id})
          })

        }
      });
  }else{
    return knex('users')
      .select('*')
      .where('email', req.body.email)
      .first()
      .then(row => {
        if (row) {
          if (row.password === req.body.password) {
            res.send(row);
          }
        }
      });
  }

});

app.post("/register", (req, res) => {
  knex("users")
    .select("*")
    .where("email", req.body.email)
    .first()
    .then(row => {
      if (row) {
        res.send("email already exist");
      } else {
        knex("users")
          .insert({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            isAdmin: false
          })
          .returning("id")
          .then(() => {
            res.send("success");
          });
      }
    });
});

app.post("/api/world", (req, res) => {
  knex.insert; // instead of res.send
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.Title}`
  );
});

app.get("/demo", (req, res) => {
  var data = [
    { id: 1, name: "Tony", job: "Project Manager" },
    { id: 2, name: "Rohit", job: "Mentor" }
  ];
  res.send({ data: data });
});


app.post("/admin", (req, res) => {
  knex("events")
    .insert({
      title: req.body.title,
      description: req.body.description,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      location: req.body.location,
      weather: req.body.weather
    })
    .returning("id")
    .then(id => {
      res.send(id);
    });
});

app.get("/discussions", (req, res) => {
  knex("messages")
  .select('*')
    .then(function (msgs) {
      let msglist=[]
      msgs.forEach(msg => {
        msglist.push(msg)
      });
      res.send(msglist);
    })
});

app.post("/newMessage", (req, res) => {
  const content = req.body.currentUser_name+" joined"
  knex("messages")
    .insert({
      event_id: req.body.activity_id,
      user_id:req.body.currentUser_id,
      contents: content
    })
    .then(res.send(true))
});

app.post("/joinCheck", (req, res) => {
  if (req.body.user_id){
    knex("messages")
      .select('*')
      .where('event_id', req.body.event_id)
      .where('user_id', req.body.user_id)
      .first()
      .then(row => {
        if (row) {
          res.send(true)
        } else {
          res.send(false)
        }
      })
  }else{
    res.send(false)
  }

});

app.listen(port, () => console.log(`Listening on port ${port}`));

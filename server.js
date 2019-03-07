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


app.post("/events", (req, res) => {
  if (req.body.date){
    const myDate = req.body.date;
    knex("events")
      .select('*')
      .whereRaw(`start_date::timestamp::date = to_date(?, 'YYYY-MM-DD')`, [myDate])
      .then(function (rows) {
        res.send(rows);
      })
  }else{
    knex('events')
      .select('*')
      .then(function (rows) {
        res.send(rows);
      })
  }

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
          }).returning(['id'])
          .then(([user]) =>{
            res.send({first_name: req.body.first_name, isAdmin:false, id:user.id})
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

app.get("/discussions/:eventId", (req, res) => {

  knex("messages")
    .select('*')
    .where('event_id',req.params.eventId )
    .then(function (rows) {
      let msgs = []
      rows.forEach((row) => {
        msgs.push(row)
      })
      res.send(msgs);
    })
});

app.get("/activities/:date", (req, res) => {
  const myDate = req.params.date;

  knex("events")
    .select('*')
    .whereRaw(`start_date::timestamp::date = to_date(?, 'YYYY-MM-DD')`, [myDate])
    .then(function (msgslist){
      res.send(msgslist);
    })
})


app.post("/auth", (req, res) => {
  if (req.body.user_id){
    res.send(true)
  }else{
    res.send(false)
  }
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

app.post("/deleteEvent", (req, res) => {
  knex("events")
    .where('id', req.body.activity_id)
    .del()
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

app.post("/chatMessage", (req, res) => {
  knex("messages")
    .insert({
      event_id: req.body.event_id,
      user_id: req.body.user_id,
      contents: req.body.contents
    })
    .returning(['event_id'])
    .then(([msg])=>{
      knex("messages")
      .select('*')
        .where('event_id', msg.event_id)
        .then(function (rows) {
          res.send(rows);
      })
    })
});

app.listen(port, () => console.log(`Listening on port ${port}`));

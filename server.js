const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const ENV = process.env.ENV || "development";
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);


const storage = multer.diskStorage({
  destination: './files',
  filename(req, file, cb) {
    cb(null, `${new Date().getTime()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('files'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/eventsget", (req, res) => {

  if (req.body.currentUser.id){
    knex("messages")
      .select('*')
      .where('join_message', true)
      .andWhere('user_id', req.body.currentUser.id)
      .then(rows => {
        const eventlist = rows.map((row)=>{
          return row.event_id
        })
        knex('events')
          .select('*')
          .whereIn('id', eventlist)
          .then(function (rows) {
            res.send(rows);
          })
      })
  } else {
    res.send(false)
  }
})

app.post("/events", (req, res) => {
  if (req.body.date){
    const myDate = req.body.date;
    knex("events")
      .select('*')
      .whereRaw(`start_date::timestamp::date = to_date(?, 'YYYY-MM-DD')`, [myDate])
      .then(function (rows) {
        res.send(rows);
      })
  } else {
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



app.post("/files", upload.single('file'), (req, res) => {
  const file = req.file;
  const meta = req.body;
  let url = null;
  if (file){
    url = 'http://localhost:5000/' + file.filename
  }
  knex("events")
    .insert({
      title: meta.title,
      description: meta.description,
      start_date: meta.start_date,
      end_date: meta.end_date,
      location: meta.location,
      weather: meta.weather,
      url: url
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
      res.send(msglist)
    })
});

app.get("/discussions/:eventId", (req, res) => {

  knex("messages")
    .select('*')
    .where('event_id',req.params.eventId )
    .then(function (msgs) {
      let msglist = []
      let userlist = []
      msgs.forEach(msg => {

        if (msg.join_message) {
          userlist.push({
            name:msg.contents,
            id:msg.id
          })
        } else {
          msglist.push(msg)
        }
      });
      res.send({
        userlist: userlist,
        msglist: msglist,
      })
    })
});

// app.get("/profile/:userId", (req, res) => {
//   knex("users")
//     .select('*')
//     .where('id', req.params.userId)
//     .then(function (rows) {
//       let userInfo = rows[0];
//       res.send(userInfo);
//     })
// });

app.get("/user/:id", (req, res) => {
  knex('users')
    .select('*')
    .where('id', req.params.id)
    .first()
    .then(row => {
      if (row) {
        res.send(row);
      }
    })
})

app.post("/user/:id", (req, res) => {

  knex('users')
    .select('*')
    .where('id', req.params.id)
    .update({
      first_name:req.body.firstName,
      last_name:req.body.lastName,
      email:req.body.email
    })
    .then(function(){
      res.send(req.params.id)
    });

})

app.get("/profileedit/:userId", (req, res) => {
  knex("users")
    .select('*')
    .where('id', req.params.userId)
    .first()
    .then(function (row) {
      res.send(row);
    })
});

app.get("/activities", (req, res) => {

  const myDate = `${req.query.date}`;
  //res.json(['beans']);
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
  const content = req.body.currentUser_name

  knex("messages")
    .insert({
      event_id: req.body.activity_id,
      user_id:req.body.currentUser_id,
      join_message: req.body.join_message,
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
      contents: req.body.contents,
      join_message: false
    })
    .returning(['event_id'])
    .then(([msg])=>{
      knex("messages")
      .select('*')
        .where('event_id', msg.event_id)
        .andWhere('join_message', false)
        .then(function (rows) {
          res.send(rows);
      })
    })
});

app.get('/user/:id', (req, res) => {
  knex('users')
    .select('*')
    .where('id', req.params.id)
    .first()
    .then(row => {
      if (row) {
        res.send(row);
      }
    })
})


app.listen(port, () => console.log(`Listening on port ${port}`));

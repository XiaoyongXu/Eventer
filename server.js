const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
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
app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.json({
    data: req.body,
  }
  );
});
app.get("/demo",(req,res)=>{
  var data = [
    {id:1, name:"Tony", job:"Project Manager"},
    {id: 2, name: "Rohit", job: "Mentor" },
  ];
  res.send({data: data});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
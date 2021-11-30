const express = require('express');
const { execPath } = require('process');
const app = express()
const port = 8080
app.get('/', (req, res) => {
  res.send("Hello world");
})

app.get('/add', (req, res) => {

  let param1 = req.query.param1;
  let param2 = req.query.param2;
  result = 0
  try{
      result = Number(param1) + Number(param2)
  }
  catch(e){
      console.log("8080  : ",e)
      result = "invalid Input"
  }
    
  res.json({"result":result,status:200})
})


app.get('/mul', (req, res) => {

    let param1 = req.query.param1;
    let param2 = req.query.param2;
    result = 0
    try{
        result = int(param1) * int(param2)
    }
    catch{
        result = "invalid Input"
    }
      
    res.json({"result":result,status:200})
  })

  app.get('/sub', (req, res) => {

    let param1 = req.query.param1;
    let param2 = req.query.param2;
    result = 0
    try{
        result = int(param1) - int(param2)
    }
    catch{
        result = "invalid Input"
    }
      
    res.json({"result":result,status:200})
  })
app.listen(port, (req,res) => {
  console.log("Listening on the port  : ",port)
})


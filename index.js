// const { json } = require("body-parser");
const express = require("express");
const app = express();

app.get("/" , (req,res) =>  {
    res.send(({"data": "Harjot"}));

})
app.listen(3000);
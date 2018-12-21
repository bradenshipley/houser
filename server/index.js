require("dotenv").config()
//import dependencies
const massive = require("massive")
const express = require("express")
// const session = require("express-session")
const { json } = require("body-parser")
//link controller
const controller = require("./controller")
//set constants
const { SERVER_PORT } = process.env
const app = express()

app.use(json())

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db)
  console.log("database is connected")
})

//endpoints
app.get("/api/houses", controller.getHouses)
app.post("/api/houses", controller.addHouse)
app.delete("/api/houses/:id", controller.deleteHouse)

app.listen(SERVER_PORT, () => {
  console.log(`I am listening on ${SERVER_PORT}`)
})

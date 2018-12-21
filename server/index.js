require("dotenv").config()
// const massive = require("massive")
const express = require("express")
const controller = require("./controller")
const session = require("express-session")
const { json } = require("body-parser")
const { SESSION_SECRET, SERVER_PORT } = process.env
const app = express()
app.use(json())
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 1000 * 60 * 30 }
  })
)
// massive(process.env.CONNECTION_STRING).then(db => {
//   app.set("db", db)
//   console.log("database is connected")
// })

app.get("/", controller.getStuff)
app.listen(SERVER_PORT, () => {
  console.log(`I am listening on ${SERVER_PORT}`)
})

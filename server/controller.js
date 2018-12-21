const axios = require("axios")

//methods
const getStuff = (req, res, next) => {
  res.json("it worked")
  // const db = req.app.get("db")
  // db.get_stuff()
  //   .then(stuff => {
  //     // console.log(inventory)

  //     res.status(200).send('it worked')
  //   })
  //   .catch(err => {
  //     console.log("err")
  //     res.status(500).send(err)
  //   })
}

module.exports = {
  getStuff
}

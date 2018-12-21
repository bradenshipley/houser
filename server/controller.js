module.exports = {
  getHouses: (req, res, next) => {
    db = req.app.get("db")

    db.get_houses()
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err => res.status(500).send(err))
  },
  deleteHouse: (req, res, next) => {
    req.app
      .get("db")
      .remove_house(req.params.id)
      .then(response => res.status(200).send(response))
      .catch(err => res.status(500).send(err))
  },
  addHouse: (req, res, next) => {
    req.app
      .get("db")
      .add_house(
        req.body.name,
        req.body.address,
        req.body.city,
        req.body.state,
        req.body.zip,
        req.body.img,
        req.body.mortgage,
        req.body.rent
      )
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).send(err))
  }
}

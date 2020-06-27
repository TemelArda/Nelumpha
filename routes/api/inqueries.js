const express = require("express");
const router = express.Router();
const URL = "http://localhost:5000";

//Client Model
const Inquery = require("../../models/Inquery");
//@Route    get api/items
//@desc     get all clients
//@access   Public
// router.get("/", (req, res) => {
//   Inquery.find().then((inqueries) => res.json(inqueries));
// });

router.post("/", (req, res) => {
  const newInquery = new Inquery({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
  newInquery.save().then((inquery) => res.json(inquery)).catch((err) => res.status(406).json(err));
});

router.delete("/:id", (req, res) => {
  Client.findById(req.params.id)
    .then((item) => {
      console.log(item);
      item.remove().then(() => res.json({ success: true }));
    })
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;

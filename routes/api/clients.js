const express = require("express");
const router = express.Router();
const URL = "http://localhost:5000";


//Client Model
const Client = require("../../models/Client");
//@Route    get api/items
//@desc     get all clients
//@access   Public
router.get("/", (req, res) => {
  Client.find().then((clients) => res.json(clients));
});

router.post("/", (req, res) => {
  const newClient = new Client({
    title: req.body.title,
    compName: req.body.compName,
    imageURL: URL + "/images/clients/" + req.body.title + ".jpg",
  });
  newClient.save().then((client) => res.json(client));
});

router.delete("/:id", (req, res) => {
  Client.findById(req.params.id)
    .then((item) =>{
        console.log(item);
        item.remove().then(()=>res.json({success:true}))
    }).catch(err=>res.status(404).json({success:false}));
});

module.exports = router;

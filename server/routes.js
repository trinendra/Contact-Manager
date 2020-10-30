const router = require("express").Router();
var Contact = require("./public/contact");

router.route("/").get((req, res) => {
  Contact.find()
    .then((contacts) => res.json(contacts))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  console.log(req.body);
  const first_name = req.body.first_name;
  const middle_name = req.body.middle_name;
  const last_name = req.body.last_name;
  const mobile = Number(req.body.mobile);
  const email = req.body.email;
  const address = req.body.address;

  const newContact = new Contact({
    first_name,
    middle_name,
    last_name,
    mobile,
    email,
    address,
  });

  newContact
    .save()
    .then(() => res.json("Contact added!!"))
    .catch((err) => {
      console.log(err);
      res.status(400).json("Error: " + err);
    });
});

router.route("/:id").get((req, res) => {
  Contact.findById(req.params.id)
    .then((contact) => res.json(contact))
    .catch((err) => res.json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
  Contact.findByIdAndDelete(req.params.id)
    .then(() => res.json("contact deleted!!"))
    .catch((err) => res.json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Contact.findById(req.params.id)
    .then((contact) => {
      contact.first_name = req.body.first_name;
      contact.middle_name = req.body.middle_name;
      contact.last_name = req.body.last_name;
      contact.mobile = req.body.mobile;
      contact.email = req.body.email;
      contact.address = req.body.address;
      contact
        .save()
        .then(() => res.json("Contact updates!!"))
        .catch((err) => res.json("Error: " + err));
    })
    .catch((err) => res.json("Error: " + err));
});

router.route("/ahh").get((req, res) => {
  res.json("trinendra");
});

module.exports = router;

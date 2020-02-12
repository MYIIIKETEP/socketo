const router = require("express").Router();
let chatMessage = require("../models/chatMessage.model")



router.route("/").get((req, res) => {
    chatMessage.find()
        .then(messages => res.json(messages))
        .catch(err => res.status(400).json("Error", + err))
})


router.route("/post").post((req, res) => {
    const userID = req.body.userID;
    const message = req.body.message;
    const room = req.body.room;
    const newMessage = new chatMessage({
        userID,
        message,
        room
    });


    newMessage.save()
        .then(() => res.json("Message added!"))
        .catch(err => res.status(400).json("Error" + err))
});

module.exports = router;
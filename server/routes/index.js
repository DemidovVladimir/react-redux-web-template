const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const collection = req.app.locals.collection;
    collection.find({}).toArray(function(err, users){

        if(err) return console.log(err);
        res.send(users)
    });
})
module.exports = router;
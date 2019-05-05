const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const stitch = req.app.locals.stitch;
    const users = await stitch.callFunction("test", []);
    res.send(users)
});
module.exports = router;
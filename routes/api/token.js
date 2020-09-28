const express = require('express')
const router = express.Router();

if (process.env.NODE_ENV !== 'production') {
    router.get('/', function (req, res) {
        res.cookie("XSRF-TOKEN", req.csrfToken());
        return res.json({
            message: 'success'
        })
    })
}

module.exports = router;

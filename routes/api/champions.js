const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const championRepository = require('../../db/champions-repo')

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const champion = await championRepository.list();
    res.json(champion);
  })
);

module.exports = router;

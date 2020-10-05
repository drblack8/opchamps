const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const championsRepo = require("../../db/champions-repo");

const regionRepository = require("../../db/regions-repo");


router.get(
    "/:id",
    asyncHandler(async (req, res) => {
      const { id } = req.params;
      const champs = await regionRepository.champs(id)
      const region = await regionRepository.one(id)
      res.json({region, champs})
    })
  )

  module.exports = router;

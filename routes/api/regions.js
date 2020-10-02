const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const regionRepository = require("../../db/regions-repo");


router.get(
    "/:id",
    asyncHandler(async (req, res) => {
      const { id } = req.params;
      const region = await regionRepository.one(id)
      res.json(region)
    })
  )

  module.exports = router;

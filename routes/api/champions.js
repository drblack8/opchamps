const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const championRepository = require("../../db/champions-repo");
const commentRepo = require("../../db/comments-repo");
const db = require("../../db/models");
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const champion = await championRepository.list();
    res.json(champion);
  })
);

router.get(
  "/top",
  asyncHandler(async (req, res) => {
    const champion = await championRepository.top();
    res.json(champion);
  })
);
router.get(
  "/jg",
  asyncHandler(async (req, res) => {
    const champion = await championRepository.jg();
    res.json(champion);
  })
);

router.get(
  "/mid",
  asyncHandler(async (req, res) => {
    const champion = await championRepository.mid();
    res.json(champion);
  })
);

router.get(
  "/adc",
  asyncHandler(async (req, res) => {
    const champion = await championRepository.adc();
    res.json(champion);
  })
);
router.get(
  "/sup",
  asyncHandler(async (req, res) => {
    const champion = await championRepository.sup();
    res.json(champion);
  })
);
router.post(
  "/:id",
  asyncHandler(async (req, res) => {
    const comment = await commentRepo.newComment(req.body)
    const user = await db.User.findByPk(req.body.userId)
    res.json({ comment, user })
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const champion = await championRepository.one(req.params.id);
    const comment = await commentRepo.coms(req.params.id)
    res.send([champion, comment]);
    
  })
);

module.exports = router;

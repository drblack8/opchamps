const { Comment } = require('./models')
const db = require('../db/models')
async function coms(id) {
    return await Comment.findAll({
        where: {
            championId: id
        },
          include: db.User
    })
}

async function newComment(e) {
    return await db.Comment.create({message: e.message, userId: e.userId, championId: e.championId })
}

module.exports = { coms, newComment }

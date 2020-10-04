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

module.exports = { coms }

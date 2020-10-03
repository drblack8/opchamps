const { Comment } = require('./models')

async function coms(id) {
    return await Comment.findAll({
        where: {
            championId: id
        }
    })
}

module.exports = { coms }

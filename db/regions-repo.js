const { Region } = require('./models')

async function one(id) {
    return await Region.findByPk(id)
}

module.exports = { one }

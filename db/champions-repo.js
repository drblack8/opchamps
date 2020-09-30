const { Champions } = require('./models')

async function list() {
    return await Champions.findAll({
        attributes: ['id', 'name', 'title']
    })
}

module.exports = { list }

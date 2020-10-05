
const { Region, Champions } = require('./models')

async function one(id) {
    return await Region.findByPk(id)
}

async function champs(id) {
    return await Champions.findAll({
        where: {
            region: id
        }
    })
}
module.exports = { one, champs }

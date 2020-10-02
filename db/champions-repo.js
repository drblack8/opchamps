const { Champions } = require('./models')

async function list() {
    return await Champions.findAll({
        attributes: ['id', 'name', 'title']
    })
}

async function one(id) {
    return await Champions.findByPk(id)
}

async function top() {
    return await Champions.findAll({
        where: {
            pos: 'top'
        }
    })
}

async function jg() {
    return await Champions.findAll({
        where: {
            pos: 'jg'
        }
    })
}
async function mid() {
    return await Champions.findAll({
        where: {
            pos: 'mid'
        }
    })
}
async function adc() {
    return await Champions.findAll({
        where: {
            pos: 'adc'
        }
    })
}
async function sup() {
    return await Champions.findAll({
        where: {
            pos: 'sup'
        }
    })
}
module.exports = { list, one, top, jg, mid, adc, sup }

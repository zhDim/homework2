const fs = require('fs')

module.exports = {
     save (data) {
        fs.writeFileSync('database.json', JSON.stringify(data))     
    },

    load(){
        return JSON.parse(fs.readFileSync('database.json'))
    }
 }
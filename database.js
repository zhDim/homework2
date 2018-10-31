const fs = require('fs')
const CircularJSON = require('circular-json');

async function save(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./database.json', CircularJSON.stringify(data), (err, contents) => {
            if (err) return reject(err)
            resolve(contents)
        })
    })
}

module.exports = {
    //  save (data) {
    //      fs.writeFileSync('data.json', JSON.stringify(data))     
    // },
    save,
    load(){
        return JSON.parse(fs.readFileSync('./database.json'))
    }
 }
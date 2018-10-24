const Chalk = require('chalk')
const Client = require('./client')

module.exports = class Appointments { 
    constructor(date, name, _procedure, hairdresser) {
        this.date = date
        this.name = name
        this.procedure = []
        this.hairdresser = hairdresser
    }
  
    report() {
        console.log('Am', Chalk.blue.bgRed.bold(this.date), 'the customer',
                    this.name, 'has an appointment for', this.procedure.length, 'by', this.hairdresser)
    }               
  }

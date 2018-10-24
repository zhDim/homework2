const Appointment = require('./appointments')

module.exports = class Client { 
    constructor(name, address, phoneNumber) {
        this.name = name
        this.address = address
        this.phoneNumber = phoneNumber
    }
     
    attend(appointments) {
        appointments.procedure.push(this)
    } 
}
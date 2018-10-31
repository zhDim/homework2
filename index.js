const Client = require('./client')
const Appointment = require('./appointments')
const Chalk = require('chalk')
const Database = require('./database')

//console.log(Database.load().attendees[0], name)
  
const jason = new Client('Mert', 'Potsdamer Platz 10', '017589548479')
const eleonora  = new Client('Eleonora', 'Treskowallee 18', '017895677941')
const david = new Client('David', 'Sewanstraße 140', '017897307941')
console.log(jason, eleonora, david)


const appointedTime1 = new Appointment('28.10.2018', 'Jonas Schmidt','haircut', 'Marcel Mueller')
console.log(appointedTime1)
jason.attend(appointedTime1)
appointedTime1.report()

const appointedTime2 = new Appointment('30.10.2018', 'David Müller','haircut', 'Marcel Mueller')
console.log(appointedTime2)
david.attend(appointedTime2)
appointedTime2.report()

const appointedTime3 = new Appointment('05.11.2018', 'Eleonora Schneider','haircut', 'Marcel Mueller')
console.log(appointedTime3)
eleonora.attend(appointedTime1)
appointedTime3.report()

console.log(appointedTime1._procedure)

/* Database.save(appointedTime1)
const loadedFile = Database.load()
console.log(loadedFile.procedure)
 */
const main = async () => {

    await Database.save(appointedTime3)
    const loadedFile3 = await Database.load()
    console.log(loadedFile3)

    await Database.save(appointedTime1)
    const loadedFile1 = await Database.load()
    console.log(loadedFile1)

    await Database.save(appointedTime3)
    const loadedFile3 = await Database.load()
    console.log(loadedFile2)

}

(async () => {
    try {
        await main()
    } catch (e) {
        console.log(e)
    }
})()

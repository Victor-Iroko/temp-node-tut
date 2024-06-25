const eventEmitter = require('events')


const customEmitter = new eventEmitter()

// creating an event listener
customEmitter.on('response', (name, id) => { // on is used to add a callback function that's going to be executed when the event is triggered
    console.log(`Data Received ${name} with id: ${id}`)
})

customEmitter.on('response', () => { // you can specify events with the same string name but different functions
    console.log("Something doing here");
})

// emit is used to trigger an event
customEmitter.emit('response', 'john', 34) // the string you pass here must be the same as the one passed into the on method

// Whenever you specify the emit method it triggers the event that has the same strong you defined 



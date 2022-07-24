const mongoose = require('mongoose')
const Room =  require('../models/roomSchema') 
const rooms =  require('../data/rooms.json')

const connect = async () => {
    await mongoose.connect('mongodb+srv://soumik9:GZKZ7b1aICHYfyWK@tech-moto.cy4t9.mongodb.net/booking-buddy?retryWrites=true&w=majority');
}

connect();


const seedRooms = async () => {
    try {
        await Room.deleteMany();
        console.log('Rooms are deleted');

        await Room.insertMany(rooms);
        console.log('All rooms are added');

        process.exit()

    } catch (error) {
        console.log(error.message);
        process.exit()
    }
}

seedRooms()


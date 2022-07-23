import Room from '../models/roomSchema.js'

const allRooms = async (req, res) => {
    try{
        const rooms = await Room.find()
        res.status(200).json({ success: true, rooms, count: rooms.length, message: 'Rooms loaded successfully!' })
    }catch(error){
        res.status(400).json({ success: false, message: 'Room loaded failed!', error: error.message })
    }
}

const createRoom = async (req, res) => {
    try{
        const room = await Room.create(req.body)
        res.status(200).json({ success: true, room, message: 'Room created successfully!' })
    }catch(error){
        res.status(400).json({ success: false, message: 'Room created failed!', error: error.message })
    }
}

export { allRooms, createRoom }
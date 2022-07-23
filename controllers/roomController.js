import Room from '../models/roomSchema.js'

const allRooms = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'All rooms'
    })
}

const createRoom = (req, res) => {
    try{
        const room = await Room.create(req.body)
        res.status(200).json({ success: true, message: 'Room created successfully!' })
    }catch(error){
        res.status(200).json({ success: false, message: 'Room created failed!', error: error.message })
    }
}

export { allRooms, createRoom }
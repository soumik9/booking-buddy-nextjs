import Room from '../models/roomSchema.js'
import ErrorHandler from '../utils/errorHandler'
import catchAsyncErrors from '../middlewares/catchAsyncErrors'
import APIFeatures from '../utils/apiFeatures'

// get all rooms
const index = catchAsyncErrors( async (req, res) => {
    const rooms = await Room.find();
    res.status(200).json({ success: true, rooms, count: rooms.length, message: 'Rooms loaded successfully!' });
})

// get single room
const single = catchAsyncErrors( async (req, res, next) => {
    const room = await Room.findById(req.query.id);

    if(!room){ 
        return res.status(404).json({ success: false, message: 'Room not found!' });
        // return next(new ErrorHandler('Room not found!', 404));
    }

    res.status(200).json({ success: true, room, message: 'Room loaded successfully!' });
})

// create new room
const create = catchAsyncErrors( async (req, res) => {
    const room = await Room.create(req.body);
    res.status(200).json({ success: true, room, message: 'Room created successfully!' });
})

// update new room
const update = catchAsyncErrors( async (req, res) => {
    let room = await Room.findById(req.query.id);
    if(!room){ return res.status(404).json({ success: false, message: 'Room not found!' }) }

    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({ success: true, room, message: 'Room updated successfully!' })
})

// delete new room
const destroy = catchAsyncErrors( async (req, res) => {
    const room = await Room.findById(req.query.id);
    if(!room){ return res.status(404).json({ success: false, message: 'Room not found!' }) }
    
    await room.remove();
    res.status(200).json({ success: true, room, message: 'Room deleted successfully!' })
})

export { index, single, create, update, destroy }
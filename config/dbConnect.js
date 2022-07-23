import mongoose from 'mongoose'

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_LOCAL_URI);
        console.log("Connected to database.");
    } catch (error) {
        console.log(error, "Could not connect to database.");
    }

}

export default dbConnect;
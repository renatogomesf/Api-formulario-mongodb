import mongoose from "mongoose";

const connectDatabse = ()=>{
    console.log('wait connecting to the database')

    mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Atlas Connected'))
    .catch((error) => console.log(error))
}

export default connectDatabse
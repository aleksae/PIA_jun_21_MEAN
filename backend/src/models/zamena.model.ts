import mongoose from "mongoose";

const Schema = mongoose.Schema

let zamena = new Schema({
    dezurstvoMoje:{
        type: Number
    },
    dezurstvoZeljeno:{
        type: Number
    }
})


export default mongoose.model('ZamenaModel', zamena, 'zamene')
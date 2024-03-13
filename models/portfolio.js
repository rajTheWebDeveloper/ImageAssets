import mongoose from 'mongoose'



let portfolioSchema=new mongoose.Schema({
    projectName:{
        type:String
    },
    url:{
        type:String
    },
    image:{
        type:String
    }
})



export default mongoose.model('Portfolio',portfolioSchema)
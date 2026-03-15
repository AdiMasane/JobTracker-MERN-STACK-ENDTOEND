import mongoose from "mongoose"

const jobSchema = new mongoose.Schema({

company:{
type:String,
required:true
},

position:{
type:String,
required:true
},

status:{
type:String,
enum:["Applied","Interview","Offer","Rejected"],
default:"Applied"
},

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
}

},{timestamps:true})

export default mongoose.model("Job",jobSchema)
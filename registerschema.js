const mongoose=require("mongoose")

const newUserSchema={
	username:String,
	password:String,
}
const Register=mongoose.model("students",newUserSchema)

module.exports=Register
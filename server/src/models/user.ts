import mongoose from 'mongoose'

const Schema = mongoose.Schema;

// SCHEMA
const userSchema = new Schema({
    username: {
        type: String, 
        required: true,
        unique: true  
    }, 
    email: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String, 
        required: true
    }, 
    bookmarks: [{
        url: String,
        image_url: String,
        title: String,
        pub_date: Date,
        descr: String
    }]
}, {timestamps: true})

// MODEL
const User = mongoose.model('User', userSchema)

export default User;
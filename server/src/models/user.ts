import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { NextFunction} from 'express'

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

// INTERFACES
interface user extends mongoose.Document {
    username: string;
    email: string;
    password: string;
    bookmarks?: (string | Date)[];
}

// password hashing - bycrypt (hook)
userSchema.pre<user>('save', async function (next){
    try {
        // hash the password if it was modified
        if(this.isModified('password')){
            const hashedPassword = await bcrypt.hash(this.password, 10)
            
            // replace the modified password with the hash
            this.password = hashedPassword
        }

        return next()
    } catch(e) {
        return next(e)
    }
})

// custom compare password function
userSchema.methods.comparePassword = async function(user: user, candidatePassword: string, next: NextFunction): Promise<boolean | void> {
    try{
        const isMatch = await bcrypt.compare(candidatePassword, user.password)
        return isMatch
    }catch(e){
        return next(e)
    }
}


// MODEL
const User = mongoose.model<user>('User', userSchema)

export default User;
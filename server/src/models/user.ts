import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { NextFunction} from 'express'

const Schema = mongoose.Schema;

// INTERFACES
export interface userDoc extends mongoose.Document {
    username: string;
    email: string;
    password: string;
    bookmarks?: (string | Date)[];

    comparePassword: (candidatePassword: string, next: NextFunction) => Promise<boolean>
}


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


// password hashing - bycrypt (hook)
userSchema.pre<userDoc>('save', async function (next){
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

// custom compare password function for user instance (not model)
userSchema.methods.comparePassword =  async function( user: userDoc, candidatePassword: string, next): Promise<boolean | void> {
    try{
        const isMatch = await bcrypt.compare(candidatePassword, user.password)
        return isMatch
    }catch(e){
        return next(e)
    }
}


// MODEL
const User = mongoose.model<userDoc>('User', userSchema)

export default User;
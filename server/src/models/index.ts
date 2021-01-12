import mongoose from 'mongoose'
import User from './user'

mongoose.set('debug', true)

const db = {
    User: User
}
export default db;
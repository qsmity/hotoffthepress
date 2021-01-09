import { Router } from 'express'
import User from '../models/user'

const router = Router()

// sandbox route to test mongodb
router.get('/', (req, res) => {
    const user = new User({
        username: 'demoUser1',
        email: 'demo@example.com',
        password: 'password'
    })

    user.save()
        .then( result => {
            res.status(201).send(result)
        })
        .catch( err => console.log(err))

})

export default router;
import { Router } from 'express'
import { signup, login } from '../controllers/auth'
import { Request, Response } from 'express'

const router = Router()

//sandbox
router.get('/', (req: Request, res: Response) => {
    res.send('you receieved a session')
})

// routes
router.post('/signup', signup)

router.post('/login', login)

export default router;
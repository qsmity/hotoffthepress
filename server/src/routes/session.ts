import { Router } from 'express'
import { signup } from '../controllers/auth'
import { Request, Response } from 'express'

const router = Router()

//sandbox
router.get('/', (req: Request, res: Response) => {
    res.send('you receieved a session')
})

// routes
router.post('/signup', signup)

export default router;
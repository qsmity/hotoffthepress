import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send('you receieved a session')
})

export default router;
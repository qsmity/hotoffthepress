import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.send('you receieved a user')
})

export default router;
import { Router } from 'express'
import { retrieveHeadlines } from '../controllers/dataNewsApi'

// merge params gives access to id from url
const router = Router({mergeParams: true})

router.post('/', retrieveHeadlines)

export default router;
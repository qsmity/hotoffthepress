import { Router } from 'express'
import { getBookmarks, sandbox } from '../controllers/bookmarks'
import db from '../models'

// merge params gives access to id from url
const router = Router({mergeParams: true})

// sandbox route to test mongodb
router.get('/sandbox', sandbox)

router.get('/', getBookmarks)

export default router;
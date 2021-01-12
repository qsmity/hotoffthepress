"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookmarks_1 = require("../controllers/bookmarks");
// merge params gives access to id from url
const router = express_1.Router({ mergeParams: true });
// sandbox route to test mongodb
router.get('/sandbox', bookmarks_1.sandbox);
router.get('/', bookmarks_1.getBookmarks);
exports.default = router;

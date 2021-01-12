"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dataNewsApi_1 = require("../controllers/dataNewsApi");
// merge params gives access to id from url
const router = express_1.Router({ mergeParams: true });
router.post('/dataNewsApi', dataNewsApi_1.retrieveHeadlines);
exports.default = router;

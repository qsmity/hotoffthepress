"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const session_1 = require("../controllers/session");
const router = express_1.Router();
//sandbox
router.get('/', (req, res) => {
    res.send('you receieved a session');
});
// routes
router.post('/signup', session_1.signup);
router.post('/login', session_1.login);
exports.default = router;

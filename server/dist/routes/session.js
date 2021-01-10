"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const router = express_1.Router();
//sandbox
router.get('/', (req, res) => {
    res.send('you receieved a session');
});
// routes
router.post('/signup', auth_1.signup);
router.post('/login', auth_1.login);
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("../models/user"));
const router = express_1.Router();
// sandbox route to test mongodb
router.get('/', (req, res) => {
    const user = new user_1.default({
        username: 'demoUser1',
        email: 'demo@example.com',
        password: 'password'
    });
    user.save()
        .then(result => {
        res.status(201).send(result);
    })
        .catch(err => console.log(err));
});
exports.default = router;

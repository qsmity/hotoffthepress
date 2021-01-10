"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const models_1 = __importDefault(require("../models"));
const secret = config_1.default.jwtConfig.secret;
const signup = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // create user in db
            let user = yield models_1.default.User.create(req.body);
            // grab fields to store in token payload
            let { id, username } = user;
            // generate/sign token
            let token = jsonwebtoken_1.default.sign({
                id,
                username
            }, secret);
            return res.status(201).json({
                id,
                username,
                token
            });
            // save token to cookies
        }
        catch (e) {
            // 1100 is mongoose validation error code
            if (e.code === 1100) {
                e.message = 'Sorry, that username or email is already taken';
            }
            // otherwise send back other generic errors in the next function
            return next({
                status: 400,
                message: e.message
            });
        }
    });
};
exports.signup = signup;
const login = function () { };
exports.login = login;

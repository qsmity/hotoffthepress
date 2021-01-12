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
exports.getBookmarks = exports.sandbox = void 0;
const models_1 = __importDefault(require("../models"));
// SANDBOX TEST ROUTE
const sandbox = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new models_1.default.User({
        username: 'demoUser2',
        email: 'demo3@example.com',
        password: 'password',
        bookmarks: [
            {
                url: 'test',
                image_url: 'test',
                title: 'test',
                pub_date: new Date(),
                descr: 'test'
            }
        ]
    });
    user.save()
        .then(result => {
        res.status(201).send(result);
    })
        .catch(err => console.log(err));
});
exports.sandbox = sandbox;
const getBookmarks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // grab id: string
        const id = req.params.id;
        // find user with id
        const user = yield models_1.default.User.findById(id);
        // return bookmarks
        return res.status(200).json({
            bookmarks: user.bookmarks
        });
    }
    catch (e) {
        return next({
            status: 404,
            message: 'Not Found'
        });
    }
});
exports.getBookmarks = getBookmarks;

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
exports.retrieveHeadlines = void 0;
const config_1 = __importDefault(require("../config"));
//has to be a require
const fetch = require('node-fetch');
const retrieveHeadlines = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { category } = req.body;
            const apiKey = config_1.default.apiKey;
            const size = 25;
            const path = `api.datanews.io/v1/headlines?topic=${category}&size=${size}country=us`;
            const result = yield fetch(path, {
                method: 'POST',
                headers: {
                    'x-api-key': apiKey
                }
            });
            if (!result.ok) {
                throw result;
            }
            return res.json(result);
        }
        catch (e) {
            return next({
                status: 400,
                message: 'Data News Api Failed, Check Inputs'
            });
        }
    });
};
exports.retrieveHeadlines = retrieveHeadlines;

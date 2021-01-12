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
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const Schema = mongoose_1.default.Schema;
// SCHEMA
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bookmarks: [{
            url: String,
            image_url: String,
            title: String,
            pub_date: Date,
            descr: String
        }]
}, { timestamps: true });
// password hashing - bycrypt (hook)
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // hash the password if it was modified
            if (this.isModified('password')) {
                const hashedPassword = yield bcrypt_1.default.hash(this.password, 10);
                // replace the modified password with the hash
                this.password = hashedPassword;
            }
            return next();
        }
        catch (e) {
            return next(e);
        }
    });
});
// custom compare password function for user instance (not model)
userSchema.methods.comparePassword = function (user, candidatePassword, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const isMatch = yield bcrypt_1.default.compare(candidatePassword, user.password);
            return isMatch;
        }
        catch (e) {
            return next(e);
        }
    });
};
// MODEL
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;

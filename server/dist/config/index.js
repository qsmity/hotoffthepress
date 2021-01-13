"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envVariables = {
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8080,
    dbURI: process.env.DATABASE_URI || '',
    apiKey: process.env.API_KEY || '',
    jwtConfig: {
        secret: process.env.JWT_SECRET || '',
        expiresIn: process.env.JWT_EXPIRES_IN || ''
    }
};
exports.default = envVariables;

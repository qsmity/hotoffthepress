
interface Ienv {
    environment: string;
    port: number | string;
    dbURI: string;
    jwtConfig: {
        secret: string,
        expiresIn: string
    }
}

const envVariables: Ienv =  {
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8080,
    dbURI: process.env.DATABASE_URI || '',
    jwtConfig: {
        secret: process.env.JWT_SECRET || '',
        expiresIn: process.env.JWT_EXPIRES_IN || ''
    }
}

export default envVariables;
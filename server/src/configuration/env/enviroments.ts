export const PORT: number = Number(process.env.PORT);
export const HOST: string = process.env.HOST || "localhost";
export const DB_USER: string = process.env.DB_USER || "postgres";
export const DB_PASS: string = process.env.DB_PASS || "password";
export const DB_NAME: string = process.env.DB_NAME || "formotex_db";
export const DB_PORT: number = Number(process.env.DB_PORT) || 5432;
export const JWT_SECRET_KEY: string = process.env.JWT_SECRET_KEY || "secret";

import pg from "pg";
const databaseUrl = process.env.DATABASE_URL;

export const pool = new pg.Pool({
    connectionString: databaseUrl
})
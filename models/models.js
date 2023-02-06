import {pool} from "../db/index.js" 
import {response} from "express"
const databaseUrl = process.env.DATABASE_URL

// GET all sessions
export async function getSessions(){
    const res = await pool.query(
        `SELECT * from sessions;`
    )
    return res;
}
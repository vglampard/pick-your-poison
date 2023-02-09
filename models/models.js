// import {pool} from "../db/index.js" 
// import {response} from "express"
const databaseUrl = process.env.DATABASE_URL

// GET all sessions
export async function getSessions(){
    const res = await pool.query(
        `SELECT * from sessions INNER JOIN drinks ON sessions.date = drinks.date;`
    )
    return res;
}

// POST new session
export async function postSession(session){
    const res = await pool.query(
        `INSERT INTO drinks(date, wine, beer, spirit, cider, alcopop) VALUES $1, $2, $3, $4, $5, $6 RETURNING *);`, [session.date, session.wine, session.beer, session.spirit, session.cider, session.alcopop]
    );
    return res.rows;
}

// POST new drinks
export async function postDrinks({date, headache, nausea, fatigue}){
    const res = await pool.query(
        `INSERT INTO sessions (date, headache, nausea, fatigue) VALUES ($1, $2, $3, $4) RETURNING *;`, [date, headache, nausea, fatigue]
    );
    return res.rows;
}

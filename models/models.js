import { pool } from "../db/index.js";
// import {response} from "express"
const databaseUrl = process.env.DATABASE_URL;

// GET all sessions
export async function getSessions() {
  const res = await pool.query(
    `SELECT * from sessions INNER JOIN drinks ON sessions.date = drinks.date;`
  );
  return res;
}

// POST new session
export async function postDrinks(date, wine, beer, spirit, cider, alcopop) {
  const resDrinksPost = await pool.query(
    `INSERT INTO drinks(date, wine, beer, spirit, cider, alcopop) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
    [date, wine, beer, spirit, cider, alcopop]
  );

  return resDrinksPost.rows;
}

// POST new hangover
export async function postHangover(date, headache, nausea, fatigue) {
  console.log("DATA AT MODEL:", date, headache, nausea, fatigue);
  const res = await pool.query(
    `INSERT INTO sessions (date, headache, nausea, fatigue) VALUES ($1, $2, $3, $4) RETURNING *;`,
    [date, headache, nausea, fatigue]
  );
  return res.rows;
}

// DELETE sessio 

export async function deleteSession(date){
  const res = await pool.query(
    'DELETE FROM drinks WHERE date = $1; DELETE FROM sessions WHERE date = $1 RETURNING *;', [date]
  )
  return res.rows;
}
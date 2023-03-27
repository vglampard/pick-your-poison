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

//TEST date format get
export async function getSessionByDate(date) {
  console.log("MODEL REACHED with val date of:", date)
  const res = await pool.query(
    `SELECT * from sessions WHERE sessions.date = $1;`, [date]
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
  const res = await pool.query(
    `INSERT INTO sessions (date, headache, nausea, fatigue) VALUES ($1, $2, $3, $4) RETURNING *;`,
    [date, headache, nausea, fatigue]
  );
  return res.rows;
}

// DELETE session 
export async function deleteDrinksByDate(date){
  const res = await pool.query(
    'DELETE FROM drinks WHERE date = $1;', [date])
    // console.log("🚨DRINKS RES AFTER FETCH:", res)
  return res.rows;
}

export async function deleteHangoverByDate(date){
  const res = await pool.query(
    'DELETE FROM sessions WHERE date = $1;', [date])
    // console.log("🚨H/O RES AFTER FETCH:", res)
  return res.rows;
}



// 
  


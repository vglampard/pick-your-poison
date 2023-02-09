import {pool} from "../index.js"
import {drinks, sessions} from '../data.js'

// DELETE drinks table
export async function deleteDrinksTable (){
  await pool.query(
    "DROP table drinks;"
  );
} 
// DELETE sessions table
export async function deleteSessionsTable (){
  await pool.query(
    "DROP table sessions;"
  );
} 


// try {
//   deleteSessionsTable();
//   deleteDrinksTable();
// } catch(error){
//   console.log(error)
// } finally {
//   await pool.end();
// }



// CREATE sessions table
export async function createSessionsTable() {
  console.log("table created")
    await pool.query(
      "CREATE TABLE sessions(id INT GENERATED ALWAYS AS IDENTITY, date DATE PRIMARY KEY, headache INT, nausea INT, fatigue INT);"
    );
  }

 // CREATE drinks table
export async function createDrinksTable (){
    await pool.query(
      "CREATE TABLE drinks(id INT GENERATED ALWAYS AS IDENTITY, date DATE PRIMARY KEY, wine INT, beer INT, spirit INT, cider INT, alcopop INT);"
    );
}  


// try {
//   createSessionsTable();
//   createDrinksTable()
// } catch(error){
//   console.log(error)
// } finally {
//   await pool.end();
// }


// SEED sessions table
export async function seedSessionsTable (){
  await pool.query(
    `INSERT INTO sessions (date, headache, nausea, fatigue) (SELECT date, headache, nausea, fatigue FROM json_populate_recordset(NULL::sessions, $1::JSON));`,
    [JSON.stringify(sessions)]
  );
} 

// SEED drinks table
export async function seedDrinksTable (){
  await pool.query(`INSERT INTO drinks (date, wine, beer, spirit, cider, alcopop) (SELECT date, wine, beer, spirit, cider, alcopop FROM json_populate_recordset(NULL::drinks, $1::JSON));`,
  [JSON.stringify(drinks)]
);
} 

// try {
//   seedSessionsTable();
// seedDrinksTable();
// } catch (error) {
//   console.log(error);
// } finally {
//   await pool.end();
// }


try {
  deleteDrinksTable();
  deleteSessionsTable();
  createDrinksTable();
  createSessionsTable();
  seedSessionsTable();
seedDrinksTable();
} catch (error) {
  console.log(error);
} finally {
  await pool.end();
}



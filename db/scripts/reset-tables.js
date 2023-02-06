import pool from "../index.js"

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


try {
  createSessionsTable();
  createDrinksTable()
} catch(error){
  console.log(error)
} finally {
  await pool.end();
}


// SEED sessions table
export async function seedSessionsTable (){
  await pool.query(
    ";"
  );
} 

// SEED drinks table
export async function seedDrinksTable (){
  await pool.query(
    ";"
  );
} 

// DELETE drinks table
export async function deleteDrinksTable (){
  await pool.query(
    ";"
  );
} 
// DELETE sessions table
export async function deleteSessionsTable (){
  await pool.query(
    ";"
  );
} 
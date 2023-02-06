import pool from "../index.js"


// CREATE sessions table
export async function createSessionsTable() {
    await pool.query(
      "CREATE TABLE sessions(id INT GENERATED ALWAYS AS IDENTITY, date DATE PRIMARY KEY, headache INT, nausea INT, fatigue INT, general INT;)"
    );
  }

 // CREATE drinks table
export async function createDrinksTable (){
    await pool.query(
      "CREATE TABLE drinks(id INT GENERATED ALWAYS AS IDENTITY, date DATE PRIMARY KEY, wine INT, beer INT, spirit INT, cider INT, alcopop INT;)"
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

// DELETE userDrinks table

// DELETE users table
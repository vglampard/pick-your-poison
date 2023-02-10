import express from "express";
import { getSessions, postSession, postHangover } from "../models/models.js";
// getDrinks, 

const router = express.Router();

router.get("/sessions", async function (req, res) {
  const response = await getSessions();
  res.status(200).json({
    success: true,
    payload: response.rows,
  });
});

//oRIGINAL
// router.post("/sessions", async function (req, res){
//   const session = req.body;
//   const response = await postSession(req.body);
//   res.status(200).json({
//     success: true,
//     payload: response
//   });
// });

//LIMITED FOR BUG FIX
router.post("/sessions", async function (req, res){
  const session = req.body;
  console.log("DATA AT ROUTER:", session.date, session.headache, session.nausea, session.fatigue)
  const response = await postHangover(session.date, session.headache, session.nausea, session.fatigue );
  res.status(200).json({
    success: true,
    payload: response
  });
});


// router.get("/sessions/drinks", async function (req, res){
//     const response = await getDrinks();
//     res.status(200).json({
//         success: true,
//         payload: response
//     })

// })

export {router}
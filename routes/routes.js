import express from "express";
import { getSessions, postSession } from "../models/models.js";
// getDrinks, 

const router = express.Router();

router.get("/sessions", async function (req, res) {
  const response = await getSessions();
  res.status(200).json({
    success: true,
    payload: response.rows,
  });
});

router.post("/sessions", async function (req, res){
  const response = await postSession(req.body);

})



// router.get("/sessions/drinks", async function (req, res){
//     const response = await getDrinks();
//     res.status(200).json({
//         success: true,
//         payload: response
//     })

// })

export {router}
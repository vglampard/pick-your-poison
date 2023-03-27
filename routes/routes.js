import express from "express";
import { getSessions, postDrinks, postHangover, deleteDrinksByDate, deleteHangoverByDate, getSessionByDate } from "../models/models.js";


const router = express.Router();

router.get("/sessions", async function (req, res) {
  const response = await getSessions();
   res.status(200).json({
    success: true,
    payload: response.rows,
  });
});

// get specific session by date
router.get("/sessions/:date", async function (req, res) {
  
  const response = await getSessionByDate(req.params.date);
   res.status(200).json({
    success: true,
    payload: response.rows,
  });
});

//LIMITED FOR BUG FIX
router.post("/sessions", async function (req, res){
  const session = req.body;
  const resHangover = await postHangover(session.date, session.headache, session.nausea, session.fatigue );
  const resDrinks = await postDrinks(session.date, session.wine, session.beer, session.spirit, session.cider, session.alcopop)
  res.status(200).json({
    success: true,
    payload: {drinks: resDrinks, hangover: resHangover}
  });
});

//DELETE route
router.delete("/sessions/:date", async function (req, res){
  // console.log("🚨REQ:", req.params)
const date = req.params.date;
const deletedDrinks = await deleteDrinksByDate(date);
const deletedHangover = await deleteHangoverByDate(date);
const finalRes = {deletedDrinks, deletedHangover}
// console.log("🚨DELETED SESSION:", finalRes)
res.status(200).json({
  success: true,
  payload: finalRes
});
})

export {router}
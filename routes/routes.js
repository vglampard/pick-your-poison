import express from "express";
import { getSessions, postDrinks, postHangover, deleteSession } from "../models/models.js";


const router = express.Router();

router.get("/sessions", async function (req, res) {
  const response = await getSessions();
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
router.delete("/sessions", async function (req, res){
const date = req.params.date;
const deletedSession = await deleteSession(date);
res.status(200).json({
  success: true,
  payload: deletedSession
});
})

export {router}
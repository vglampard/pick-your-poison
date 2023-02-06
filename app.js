import express, { application } from 'express'
import cors from "cors"
import {router} from "./routes/routes.js"

const app = express()
app.use(express.json())
app.use(cors("*"));

// do I need this? app.use(json.parse());
app.use("/api", router)

const PORT = process.env.PORT;

app.listen(PORT, function (){
    console.log(`Server listening on port ${PORT}`)
})

export default app
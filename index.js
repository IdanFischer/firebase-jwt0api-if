import express from "express"
import cors from "cors"
import { getSecrets } from "./src/utils.js"

const app = express()
app.use(express.json())
app.use(cors())

app.get('/secrets', getSecrets)

app.get('/secrets', getSecrets)

app.listen((3030), () => {
  console.log('listening on http://localhost:3030...')
})

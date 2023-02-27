import { initializeApp, cert } from "firebase-admin/app"
import { getAuth } from "firebase/auth"
import { creds } from "./secrets.js"


export async function getSecrets(req, res) {
  // first check if they are sending a token
  if (!req.hedaers || !req.headers.authorization) {
    // can also do req.hedaers && req.headers.authorization
    res.status(403).send({ message: "Forbidden" })
    return
  }
  // connect to firebase
  initializeApp({
    credential: cert(creds)
  })
  const decoded = await getAuth().verifyIdToken(req.headers.authorization)
  if (!decoded) {
    res.status(403).send({ message: "Forbidden"})
  }
  // VALIDATE TOKEN
  res.send({ message: "The baby eagle sits in the nest at night." })
}
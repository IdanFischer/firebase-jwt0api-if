import { initializeApp, cert, getApps } from "firebase-admin/app"
import { getAuth } from "firebase-admin/auth"
import { creds } from "./secrets.js"


export async function getSecrets(req, res) {
  // first check if they are sending a token
  if(!req.headers || !req.headers.authorization) {
    res.status(403).send({ message: 'Forbidden first' })
    return
  }
  // connect to firebase
  if(getApps().length < 1){
    initializeApp({
      credential: cert(creds)
    })
  }
  const decoded = await getAuth().verifyIdToken(req.headers.authorization)
  if (!decoded) {
    res.status(403).send({ message: "Forbidden second"})
    return
  }
  // VALIDATE TOKEN
  res.send({ message: "The baby eagle sits in the nest at night." })
}
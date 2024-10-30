import express from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
)

app.get("/", (req, res) => {
  const token = req.cookies.token
  const decode = jwt.verify(token, "kartik1234") as JwtPayload
  console.log(decode.name)
  res.json({ status: decode.name })
})

app.post("/signin", (req, res) => {
  const mail = req.body.mail
  const password = req.body.password
  const token = jwt.sign({ name: "kartikbhatt" }, "kartik1234")
  res.cookie("token", token)
  console.log(mail, password)
  res.json({ message: "success", token: token })
})

app.post("/signout", (req, res) => {
  const message = req.body.message
  if (message != "logout") {
    res.json({ message: "fuck you" })
  }
  res.clearCookie("token")
  res.json({ message: "Logout Success" })
  res.end
})

app.listen(3000, () => {
  console.log("server is running")
})

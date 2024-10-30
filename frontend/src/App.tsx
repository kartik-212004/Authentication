import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./components/Signup"
import { Signin } from "./components/Signin"
import { User } from "./components/User"
import { Home } from "./components/Home"
import Navbar from "./components/navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/signin"} element={<Signin />} />
        <Route path={"/user"} element={<User />} />
        <Route path={"/"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

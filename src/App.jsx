import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import { Register } from "./Register"
import { Login } from "./Login"
import { Navbar } from "./Navbar"
import { Home } from "./Home"
import { ForgotPassword } from "./Forgotpassword"
import { Resetpassword } from "./Resetpassword"
import { Shortenurl } from "../Shortenurl"

export const App = () => {
  return (
 <>
 <BrowserRouter>
 <div>
  <Navbar/>
 </div>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path="/login" element={<Login/>}/>
    <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      <Route path="/resetpassword/:token" element={<Resetpassword/>}/>
      <Route path='/shortenurl' element={<Shortenurl/>}/>
 </Routes>
 </BrowserRouter>

 </>
  )
}


export default App

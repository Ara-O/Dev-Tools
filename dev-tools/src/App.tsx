import Home from "./views/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddResource from "./views/AddResource"
// import Footer from "./components/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        {/* Routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-resource' element={<AddResource />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

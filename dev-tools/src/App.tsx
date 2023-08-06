import Home from "./views/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        {/* Routes */}
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

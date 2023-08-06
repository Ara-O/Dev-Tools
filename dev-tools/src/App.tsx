import Home from "./views/Home"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <h2>
          <Link to="/">HTML</Link>
        </h2>

        {/* Routes */}
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

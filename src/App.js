import { BrowserRouter, Routes,Route } from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Header from "./Header"
import Home from "./Home"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/contact" element = {<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
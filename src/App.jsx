import Fetch from "./Pages/Fetch"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Recipes from "./Pages/Recipes"


function App() {
  
  return (
      <div className="Body"> 
        <div className="Main">
          <div className="SubMain">
          <b>Meal Life Style</b>
          <p>Prepare to become the master chef of your kitchen <br /> with our drool-worthyrecipe lineup on our website!</p>
          </div>
        <img src="https://images.ctfassets.net/awb1we50v0om/2Spf80TME2zIhLqsi3Zxv9/919421a45f3260ee426c99c35235f1c8/Plates03__3__copy3.jpg?w=1920&fm=webp&q=70" 
        className="Logo"></img>
        </div>
        <Router>
      <div>
        <Routes>
          <Route path="/" element={<Fetch />} />
          <Route path="/recipes/:id" element={<Recipes />} />
        </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App

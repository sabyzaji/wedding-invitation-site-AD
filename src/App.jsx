// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
     
//     </>
//   )
// }

// export default App

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import WeddingLayout from "./components/wedding/WeddingLayout";
import PageNotFound from "./lib/PageNotFound";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WeddingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

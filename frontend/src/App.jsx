import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Create from './pages/Create.jsx'
import Feed from './pages/Feed.jsx'

const App = () => {
  return (
    
     <Router>
        <Routes>
          <Route path='/create-post' element={<Create/>} />
          <Route path='/feed' element={<Feed/>} />
        </Routes>

     </Router>
  )
}

export default App
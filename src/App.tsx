
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Homepage.'
import Article from './frontpage/Article.tsx/Article'

function App() {
  

  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Homepage />} />

        <Route path="/article/:articleId" element={<Article />} />
      </Routes>
    </Router>
  )
}

export default App


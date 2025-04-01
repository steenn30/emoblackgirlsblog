
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Homepage.'
import Article from './frontpage/Article.tsx/Article'
import { HelmetProvider } from "react-helmet-async";

function App() {
  
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Homepage />} />

        <Route path="/article/:slug" element={<Article />} />
      </Routes>
    </Router>
    </HelmetProvider>
  )
}

export default App


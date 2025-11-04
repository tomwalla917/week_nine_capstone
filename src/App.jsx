import Navigation from './components/Navigation'
import BookSearch from './components/BookSearch'
import BookCollection from './components/BookCollection'
import BookDetails from './components/BookDetails'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <div className="home-view">
                <h1>Welcome to CodeCaddy</h1>
                <p>Your personal book collection manager</p>
                <div className="quick-actions">
                  <button onClick={() => window.location.href='/search'} className="btn-primary">
                    Search Books
                  </button>
                  <button onClick={() => window.location.href='/collection'} className="btn-secondary">
                    View Collection
                  </button>
                </div>
              </div>
            } />
            <Route path="/search" element={<BookSearch />} />
            <Route path="/collection" element={<BookCollection />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
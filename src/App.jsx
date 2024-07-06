import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FilmsList } from './components/FilmsList/FilmsList'
import { FilmDetails } from './components/FilmDetails/FilmDetails'

function App() {

  return (
    <>
      <Router basename='/redux-toolkit'>
        <div>
          <div className="page">
            <Routes>
              <Route path="/" exact element={<FilmsList />} />
              <Route path="films/:id" element={<FilmDetails />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App

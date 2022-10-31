import { Route, Routes } from 'react-router-dom'
import Header from './layout/header'
import Home from './views/Home'
import About from './views/About'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App

import './App.css'
import About from './components/About'
import Interests from './components/Interests'
import Profile from './components/Profile'
import Footer from './components/Footer'
function App() {

  return (
    <div className='card'>
      <Profile />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App

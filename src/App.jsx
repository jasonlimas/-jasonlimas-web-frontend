import { useState } from 'react'
import './app.scss'
import Topbar from './components/topbar/Topbar'
import Menu from './components/menu/Menu'
import Intro from './components/intro/Intro'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
      </div>
    </div>
  );
}

export default App;

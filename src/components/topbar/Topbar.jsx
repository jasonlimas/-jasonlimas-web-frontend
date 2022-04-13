import './topbar.scss'

export default function Topbar({ menuOpen, setMenuOpen }) {
  const handleHamburgerClick = () => setMenuOpen(!menuOpen)

  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="center">
          <a href="#intro" className="logo">Jason Limas</a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={handleHamburgerClick}>
            <span></span>
            <span></span>
            <span></span>
          </div> 
        </div>
      </div>
    </div>
  )
}

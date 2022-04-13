import './topbar.scss'

export default function Topbar({ menuOpen, setMenuOpen }) {
  const handleHamburgerClick = () => setMenuOpen(!menuOpen)

  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="center">
          <a href="" className="logo">Jason Limas</a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={handleHamburgerClick}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div> 
        </div>
      </div>
    </div>
  )
}

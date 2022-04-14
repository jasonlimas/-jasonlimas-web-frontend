import './menu.scss'
import ListElement from './ListElement'

export default function Menu({ menuOpen, setMenuOpen }) {
  // const ref = useRef()

  const handleClick = () => setMenuOpen(false)

  /*useEffect(() => {
    // Check if outside of ref is clicked
    const checkClickOutside = e => {
      if (menuOpen && ref.current && !ref.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }

    // Event listener
    document.addEventListener('mousedown', checkClickOutside)

    // Cleanup the event listener
    return () => document.removeEventListener('mousedown', checkClickOutside)
  }, [menuOpen])*/

  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <img src="assets/logo-white.png" alt="" />
        <ul>
          <ListElement name='INTRO' link='#intro' handleClick={handleClick} />
          <ListElement name='ABOUT' link='#about' handleClick={handleClick} />
          <ListElement name='CONTACT' link='#contact' handleClick={handleClick} />
        </ul> 
        <p>Built with ❤️ with React.js</p>
    </div>
  )
}

import './menu.scss'
import ListElement from './ListElement'

export default function Menu({ menuOpen, setMenuOpen }) {
  const handleClick = () => setMenuOpen(false)

  return (
    <div className={'menu ' + (menuOpen && 'active')}>
        <ul>
          <ListElement name='Intro' link='#intro' handleClick={handleClick} />
          <ListElement name='About' link='#about' handleClick={handleClick} />
          <ListElement name='Contact' link='#contact' handleClick={handleClick} />
        </ul> 
    </div>
  )
}

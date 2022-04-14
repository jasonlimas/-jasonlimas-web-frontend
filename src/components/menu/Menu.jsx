import './menu.scss'
import { Star, AccountBox, Mail } from '@material-ui/icons'
import ListElement from './ListElement'

export default function Menu({ menuOpen, setMenuOpen }) {
  const handleClick = () => setMenuOpen(false)

  return (
    <div className={'menu ' + (menuOpen && 'active')}>
        <ul>
          <ListElement name='INTRO' link='#intro' handleClick={handleClick} />
          <ListElement name='ABOUT' link='#about' handleClick={handleClick} />
          <ListElement name='CONTACT' link='#contact' handleClick={handleClick} />
        </ul> 
    </div>
  )
}

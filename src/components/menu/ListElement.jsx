import './listElement.scss'

export default function ListElement({ name, link, handleClick }) {
  return (
    <li onClick={handleClick}>
        <a href={link}>
            {name}
        </a>
    </li>
  )
}
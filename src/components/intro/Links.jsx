import './links.scss'
import { Instagram, Facebook, LinkedIn, GitHub } from '@material-ui/icons'

export default function Links() {
  return (
    <div className='links'>
        <a href='https://www.instagram.com/jasonadr14/' target='_blank' rel='noreferrer'>
            <Instagram className='icon' />
        </a>
        <a href="https://www.facebook.com/jasonlimas14/" target='_blank' rel='noreferrer'>
            <Facebook className='icon' />
        </a>
        <a href="https://www.linkedin.com/in/jason-andrea-limas/" target='_blank' rel='noreferrer'>
            <LinkedIn className='icon' />
        </a>
        <a href="https://github.com/jasonlimas" target='_blank' rel='noreferrer'>
            <GitHub className='icon' />
        </a>
    </div>
  )
}

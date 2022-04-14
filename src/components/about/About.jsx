import './about.scss'
import { Info, MailOutline } from '@material-ui/icons'

export default function About() {
  return (
    <div className='about' id='about'>
        <Info className='iconInfo' />
        <h1>About Me</h1>
        <div className='pContainer'>
          <p className='pDesc'>
            Hi! I'm Jason. I'm an undergraduate Computer Science student at Deakin University, and I'm also currently working as a full-stack developer at XDC Indonesia. I'm passionate about my work and software engineering in general. I built this website as a form of demonstration of my proficiency in web development.
          </p>
          <p className='pDesc'>
            I've been coding since 2017 and have built several apps with various programming languages throughout the years. When I started working as a full-stack developer, I built my first major project with the Laravel framework, which made me fall in love with web development. Since then, I've been spending my free time discovering many tech stacks and familiarizing myself more with the fundamentals of modern web apps.
          </p>
          <p className='pDesc'>
            Outside of work and studies, I love exploring the world of specialty coffee. I like reading books about coffee, learning more about various brew methods and recipes, as well as tasting coffees from different origins.
          </p>
          <p className='pDesc'>
            This page serves as a place to introduce myself and express my creativity through web designs and the things I write. In the future, I'm planning to expand this site by adding a blog page and a gallery, where I can write about things I'm interested in and show some photographs.
          </p>
        </div>
        <span></span>
        <p className='pContact'>
          You can contact me using the form at the bottom of this page, <br></br>
          or email me at me@jasonlimas.com
        </p>
        <a href="mailto:me@jasonlimas.com">
          <MailOutline className='iconMail' />
        </a>
    </div>
  )
}

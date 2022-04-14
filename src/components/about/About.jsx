import './about.scss'
import { Info, MailOutline } from '@material-ui/icons'

export default function About() {
  return (
    <div className='about' id='about'>
        <Info className='iconInfo' />
        <h1>About Me</h1>
        <p className='pDesc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis nulla, tempus eu urna sed, placerat tincidunt orci. Mauris id ante commodo, consequat odio nec, luctus orci. Ut a quam sed orci ornare efficitur. Aliquam erat volutpat. Donec commodo non ex non ullamcorper. Fusce congue lobortis enim, ut porta orci tempor sed. Donec volutpat sed mauris ac porttitor. Nam nulla arcu, semper in velit sed, consectetur mattis arcu. Quisque pretium nibh ut ipsum maximus auctor. Sed nec sodales tortor. In hac habitasse platea dictumst. Duis eget lacinia lectus, quis fringilla arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nec posuere magna.

  Ut sit amet leo sed justo gravida sollicitudin. Proin sagittis tellus est, vel rutrum elit maximus vel. Donec accumsan odio a magna efficitur varius. Aliquam erat volutpat. Pellentesque pretium nunc in lacus suscipit ultricies. Vivamus elementum ornare tellus, ut convallis mi fermentum et. Morbi varius, nulla id eleifend cursus, purus neque ultrices lorem, eget elementum lectus justo eget mauris. Suspendisse tortor lectus, lobortis in dignissim suscipit, suscipit at magna. In consectetur dui eu enim mollis faucibus. Aliquam quis venenatis est. Phasellus suscipit nisl diam, ut pharetra metus dictum posuere. Mauris pellentesque orci vel neque dignissim, quis ornare risus mollis. Suspendisse ac malesuada magna. Praesent rutrum lacus eget ante varius, mattis fermentum sapien sodales. Ut sed arcu vitae lacus bibendum rutrum. Donec ultricies ex sodales lobortis fringilla.
        </p>
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

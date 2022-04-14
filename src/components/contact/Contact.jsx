import './contact.scss'

export default function Contact() {
    const leftStyle = {
        backgroundImage: `URL('assets/me-outside-stali.jpg')`,
        height: '100%'
    }

  return (
    <div className='contact'>
        <div className="left" style={leftStyle}>
        </div>
        <div className="right">
            <h2>Contact Me</h2>
        </div>
    </div>
  )
}

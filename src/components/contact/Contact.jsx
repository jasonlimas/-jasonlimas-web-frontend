import './contact.scss'

export default function Contact() {
    const leftStyle = {
        backgroundImage: `URL('assets/me-outside-stali.jpg')`,
        height: '100%'
    }

  return (
    <div className='contact' id='contact'>
        <div className="left" style={leftStyle}>
        </div>
        <div className="right">
            <h2>Contact Me</h2>
            <p>
                Feel free to leave me any message using the form below. I'll reply as soon as possible.<br></br>
                Also, you can also reach out on my social media!
            </p>

            <form>
                <input name="email" type="text" placeholder="Email" />

                <textarea name="message" placeholder="Message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

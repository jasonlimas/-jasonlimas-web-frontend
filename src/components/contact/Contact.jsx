import './contact.scss'
import { useState } from 'react'
import { CircularProgress, Fade } from '@material-ui/core'
import axios from 'axios'

export default function Contact() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const leftStyle = {
        backgroundImage: `URL('assets/me-outside-stali.jpg')`,
        height: '100%'
    }
    const sendMessage = e => {
        e.preventDefault()

        // Check if user has already submitted
        if (submitted) return

        // Replace button with loading spinner
        setSubmitted(true)

        // Build message object
        const data = {
            email: email,
            message: message,
            date: new Date(),
        }

        // Post request
        axios
            .post('/api/contact', data)
            .then(res => {
                console.log(res)
            })
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handleMessageChange = e => {
        setMessage(e.target.value)
    }

  return (
    <div className='contact' id='contact'>
        <div className="left" style={leftStyle}>
        </div>
        <div className="right">
            <h2>Contact Me</h2>
            <p>
                Feel free to leave any message and get in touch with me using the form below. I'll reply as soon as possible.
                You can also reach out on my social media!
            </p>

            <form onSubmit={sendMessage}>
                <input 
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange} />

                <textarea
                    name="message"
                    placeholder="Message"
                    value={message}
                    onChange={handleMessageChange}></textarea>

                <div className='submitWrapper'>
                    {
                        submitted ?
                        <Fade
                        in={submitted}
                        style={{transitionDelay: submitted ? '200ms' : '0ms'}}
                        unmountOnExit>
                            <CircularProgress color="inherit" />
                        </Fade>
                        : <button type="submit">Submit</button>
                    }
                </div>    
            </form>
        </div>
    </div>
  )
}

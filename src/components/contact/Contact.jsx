import './contact.scss'
import { useState } from 'react'
import { CircularProgress, Fade } from '@material-ui/core'
import axios from 'axios'
import Notification from './components/Notification'

export default function Contact() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [notificationMessage, setNotificationMessage] = useState('')
    const [notificationIsError, setNotificationIsError] = useState(false)

    const leftStyle = {
        backgroundImage: `URL('assets/me-outside-stali.jpg')`,
        height: '100%'
    }
    const sendMessage = e => {
        e.preventDefault()

        // Check if user has already submitted
        if (submitted) return

        // Check if input email is empty
        if (!email) {
            setNotificationMessage('Please enter your email address')
            setNotificationIsError(true)
            return
        }

        // Check if input email is valid
        if (!validateEmail(email)) {
            setNotificationMessage('Please enter a valid email address')
            setNotificationIsError(true)
            return
        }

        // Check if input message is empty
        if (!message) {
            setNotificationMessage('Please enter a message')
            setNotificationIsError(true)
            return
        }

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
            .post('/contact-me/send', data)
            .then(res => {
                setNotificationMessage('Message sent. Thank you!')
                setNotificationIsError(false)
            })
            .catch(error => {
                setNotificationMessage('Oops! Something went wrong. Please try again later.')
                setNotificationIsError(true)
                console.log(error)
            })
    }

    const handleEmailChange = e => setEmail(e.target.value)

    const handleMessageChange = e => setMessage(e.target.value)

    const validateEmail = email => {
        const regexPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regexPattern.test(email)
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

            <div className="formWrapper">
                {notificationMessage && <Notification isError={notificationIsError} message={notificationMessage} />} 
                {!submitted &&
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
                }
            </div>
        </div>
    </div>
  )
}

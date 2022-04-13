import './intro.scss'
import { useEffect, useRef } from 'react'
import { init } from 'ityped'

export default function Intro() {
  const ref = useRef();

  useEffect(() => {
      init(ref.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Developer', 'Coffee Enthusiast'],
      })
  }, [])

  return (
    <div className='intro' id='intro'>
        <div className="left">
            <div className="wrapper">
                <h2>Hello! My name is</h2>
                <h1>Jason Limas</h1>
                <h3>I'm a <span ref={ref}></span></h3>
            </div>
        </div>
        <div className="right">
            <div className="imgContainer">
                <img src="assets/me-intro.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

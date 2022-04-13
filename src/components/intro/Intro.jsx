import './intro.scss'

export default function Intro() {
  return (
    <div className='intro'>
        <div className="left">
            <div className="wrapper">
                <h2>Hello! My name is</h2>
                <h1>Jason Limas</h1>
                <h3>I'm a <span>AUTO TEXT</span></h3>
            </div>
        </div>
        <div className="right">
            <img src="assets/me-intro.jpg" alt="" />
        </div>
    </div>
  )
}

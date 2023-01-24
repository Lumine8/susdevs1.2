import './css/Contact.css'
import video from '../Assets/videos/video1.mp4'
function Contact(){
    return(
        <>
        <video src={video} id="background-video" autoPlay loop muted typeof='video/mp4'/>
        <div id='body' className="contact-form-container" style={{marginTop:'3rem'}}>
  <div className="contact-us">
    <div className="contact-header">
      <h1>
        &#9135;&#9135;&#9135;&#9135;&nbsp;&nbsp;CONTACT US
      </h1>
    </div>
    <div className="social-bar">
      <ul>
        <li>
          <i className="fa fa-facebook-f"></i>
        </li>
        <li>
          <i className="fa fa-twitter"></i>
        </li>
        <li>
          <i className="fa fa-instagram"></i>
        </li>
        <li>
          <i className="fa fa-dribbble"></i>
        </li>
      </ul>
    </div>
  </div>
  <div className="header">
    <h1>
      Leave us a message!
    </h1>
    <h2>
    Connect With Us
    </h2>
  </div>
  <div className="address">
    <i className="fa fa-map-marker"></i>
    <h3>
      SusDevs
    </h3>
    <h3>
      
    </h3>
  </div>
  <div className="phone">
    <i className="fa fa-phone"></i>
    <h3>
      +91 90909909
    </h3>
  </div>
  <div className="email">
    <i className="fa fa-envelope"></i>
    <h3>
      hello@SusDevs.com
    </h3>
  </div>
  <div className="contact-form">
    <form>
      <input placeholder="Name" type="text" /><input placeholder="Email" type="email" /><textarea placeholder="Message..." rows="4"></textarea><button type="button">SEND </button>
    </form>
  </div>
</div>
        </>
    )
}
export default Contact
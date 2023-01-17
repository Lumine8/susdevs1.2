import React from 'react';
import video from '../Assets/videos/video1.mp4'
import './css/Mainpage.css'
import image from '../Assets/sus-devs-logos/png/logo-no-background.png'

(function () {
    var words = [
    "Students",
    "Not Rocks",
    "Dreamers",
    "Creators",
    "Not Happy" 
],
    i = 0;
    setInterval(function(){ $('#words').fadeOut(function(){
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
      }); }, 3000)
  })();

  

class Mainpage extends React.Component{
    componentDidMount () {
        const script = document.createElement("script");
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
        script.async = true;
        document.body.appendChild(script);
    }
    render(){
    return(
        <>
    <section id="home-section">
      <div className="text img">
        <video src={video} id="background-video" autoPlay loop muted typeof='video/mp4'/>
    <img src={image} alt="home.image" className='img'/>
      <h1 className="heading" >We are &nbsp;<span id="words">Developers</span>.</h1>
    </div>
    </section>
    </>
    )
    }
}
export default Mainpage
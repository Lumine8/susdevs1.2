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
    

    <section id="About-us-section">
    <div className="text"><div className="container">
      We are a group of avid student developers, who share the vision of helping those who are burdened.
      <br/> Mentally, that is.
      <br/> To listen to those who need someone to listen.
      <br/><br/>
      Our primary objective is to build platforms on which people can express themselves. Not the sort of things you'll find on public forums, but rather those things that you just need to get off your chest.
      <br/>In a world where masses are driven to self-harm, drugs and other means of relief, we are trying to build solutions that can help folks understand the importance of mental health.
      <br/><br/><div  style={{color: "#e2b714"}}>
      Join us on our journeys and reach out! We would love to hear your thoughts and opinions.
      </div>
      
    </div>
    
    </div>
    </section>

    </>
    )
    }
}
export default Mainpage
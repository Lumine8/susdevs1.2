import video from '../Assets/videos/video1.mp4'
import './css/ErrorPage.css'


const ErrorPage = () =>{
    
    return(
        <>
         <video src={video} id="background-video" autoPlay loop muted typeof='video/mp4'/>
        <div class="stage">
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
      </div>
      
      <script>window.setTimeout = null;</script>
      

        </>
    )
}

export default ErrorPage;
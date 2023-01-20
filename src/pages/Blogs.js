import './css/Blogs.css'
import video from '../Assets/videos/video1.mp4'

function Blogs(){
    

    return(
        <>
         <video src={video} id="background-video" autoPlay loop muted typeof='video/mp4'/>
    <header>
  <h1 style={{paddingBottom:'3rem', textAlign:'center', fontSize:'2rem'}}>Articles / Blogs</h1>
</header>
<div className="band">
  <div className="item-1">
    <a href="https://www.yuumeiart.com/blog" target={'_blank'} className="card">
      <div className="thumb" style={{backgroundImage:"url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/454c2ed9-5cc2-484f-8449-167203bd7623/d9ngjsi-09c9f542-15f8-40f6-8500-f984622a4fb2.jpg/v1/fill/w_1264,h_632,q_70,strp/feel_and_conquer_by_yuumei_d9ngjsi-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzUwIiwicGF0aCI6IlwvZlwvNDU0YzJlZDktNWNjMi00ODRmLTg0NDktMTY3MjAzYmQ3NjIzXC9kOW5nanNpLTA5YzlmNTQyLTE1ZjgtNDBmNi04NTAwLWY5ODQ2MjJhNGZiMi5qcGciLCJ3aWR0aCI6Ijw9MTUwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wg4WRllzUhwOEVBOIwAcS3UO9QQJg2an7kvaXqdEE_E)"}}></div>
      <article>
        <h1>Feel and Conquer</h1>
        <span>yuumei art</span>
      </article>
    </a>
  </div>
  <div className="item-2">
    <a href="https://www.nationalelfservice.net/diagnosis/brain-imaging/brain-scans-cbt-anxiety/" target={'_blank'} className="card">
      <div className="thumb" style={{backgroundImage:"url(https://www.incimages.com/uploaded_files/image/1920x1080/shutterstock_619960997_360000.jpg)"}}></div>
      <article>
        <h1>Can brain scans tell us how successful CBT for anxiety will be? Meta-analysis of task-based fMRI studies shows promise</h1>
        <span>Millie Lowther, Isabel</span>
      </article>
    </a>
  </div>
  <div className="item-3">
    <a href="https://www.time-to-change.org.uk/personal-stories/5-ways-to-start-conversation-about-mental-health" target={'_blank'} className="card">
      <div className="thumb" style={{backgroundImage:" url(https://www.time-to-change.org.uk/sites/default/files/styles/feature_image/public/Lauren-768x458.png?itok=rHA9jM5u)"}}></div>
      <article>
        <h1>5 ways to start a conversation about mental health</h1>
        <p>Starting conversations that seem 'deep' or potentially emotional can be daunting - here are five tips to help you get started.</p>
        <span>Lauren</span>
      </article>
    </a>
  </div>
  <div className="item-4">
    <a href="https://www.time-to-change.org.uk/personal-stories/5-ways-to-ask-twice-when-your-mate-says-im-fine" target={'_blank'} className="card">
      <div className="thumb" style={{backgroundImage:"url(https://www.time-to-change.org.uk/sites/default/files/styles/feature_image/public/carl-feat_0.png?itok=GfFp-FCH)"}}></div>
      <article>
        <h1>5 ways to ask twice when your mate says I'm fine</h1>
        <p>When asked “how are you?”, how often do you tell the truth? To Carl, asking twice means different things. Here's a few ways people have shown they're there he needs them.</p>
        <span>by Carl</span>
      </article>
    </a>
  </div>
  <div className="item-5">
    <a href="https://hyperboleandahalf.blogspot.com/" target={'_blank'} className="card">
      <div className="thumb" style={{backgroundImage:" url(https://149556883.v2.pressablecdn.com/wp-content/uploads/pexels-pixabay-39369-scaled.jpg)"}}></div>
      <article>
        <h1>Early intervention provides happier, healthier lives to at-risk children - so why isn't it the law?</h1>
        <p>The young people of England are bearing the burden of deepening mental health problems as the number needing treatment has risen by 39% in just one year.</p>
        <span>Juliette Burton</span>
      </article>
    </a>
  </div>
  <div className="item-6">
    <a href="https://hyperboleandahalf.blogspot.com/" target={'_blank'} className="card">
      <div className="thumb" style={{backgroundImage:" url(https://1.bp.blogspot.com/-jiO770-_Hkg/UkonWLYAAbI/AAAAAAAAKuE/uzW1QoWCzCo/s1600/blogheadernewnewblue3.png)"}}></div>
      <article>
        <h1>hyperbole and a half</h1>
        <p>Unlike the other blogs in our list, web comic Hyperbole and a Half does not focus exclusively on mental health.</p>
        <span>Richard</span>
      </article>
    </a>
  </div>
  <div className="item-7">
    <a href="https://loveandlifetoolbox.com/jump-start-your-emotional-health/" target={'_blank'} className="card">
      <div className="thumb" style={{backgroundImage:" url(https://i0.wp.com/loveandlifetoolbox.com/wp-content/uploads/2023/01/pexels-ketut-subiyanto-4909326.jpg?resize=1280%2C500&ssl=1)"}}></div>
      <article>
        <h1>Jump-Start Your Emotional Health</h1>
        <p>The New Year or any time is always a good time to reflect upon what changes you'd like to make in your life in order to live as optimally as possible. A lot of focus gets put on improved health habits impacting the physical body like new exercise programs, diet changes or cleanses.</p>
        <span>Lisa Brookes Kift, MFT</span>
      </article>
    </a>
  </div>
</div>
    </>
    )
}
export default Blogs
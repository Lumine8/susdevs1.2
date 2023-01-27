import React from "react";
import './css/Projects.css'
import video from '../Assets/videos/video1.mp4'

class Projects extends React.Component {
    constructor() {
      super();
  
      this.state = {
        loaded: false,
        animating: false,
        animationDirection: "",
        animationDuration: 300,
        currentSlide: 0,
        slides: [
          {
            title: "Lorem",
            imageUrl:
              "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: {
              tech_stack: "Lorem Ipsum Dolor Sit Amet",
              progress: " In-progress/ Completed",
              Platform: "App-Store/ Private site"
            }
          },
          {
            title: "Ipsum",
            imageUrl:
              "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            details: {
                tech_stack: "Lorem Ipsum Dolor Sit Amet",
                progress: " In-progress/ Completed",
                Platform: "App-Store/ Private site"
              }
          }
        ]
      };
  
      this.changeSlide = this.changeSlide.bind(this);
    }
  
    fireAnims(duration) {
      this.setState({
        animating: true,
        animationDirection: "out"
      });
      // halfway
      setTimeout(() => {
        this.setState({
          animating: true,
          animationDirection: "in"
        });
      }, duration / 2);
      // done
      setTimeout(() => {
        this.setState({
          animating: false,
          animationDirection: ""
        });
      }, duration);
    }
  
    changeSlide(dir) {
      const currentSlide = this.state.currentSlide;
      const slides = this.state.slides;
  
      if (dir === "right") {
        if (currentSlide < slides.length - 1) {
          this.fireAnims(this.state.animationDuration * 2);
          window.setTimeout(() => {
            this.setState({
              currentSlide: currentSlide + 1
            });
          }, this.state.animationDuration);
        }
      } else {
        if (currentSlide > 0) {
          this.fireAnims(this.state.animationDuration * 2);
          window.setTimeout(() => {
            this.setState({
              currentSlide: currentSlide - 1
            });
          }, this.state.animationDuration);
        }
      }
    }
  
    determineDir(delta) {
      if (delta > 0) {
        return "right";
      } else {
        return "left";
      }
    }
  
    componentDidMount() {
      this.setState({
        loaded: true
      });
    }
    render() {
      let classes = ["slideshow"];
      if (this.state.animating) {
        classes.push(
          "slideshow--animated slideshow--" + this.state.animationDirection
        );
      } else {
        classes = ["slideshow"];
      }
      return (
        <div className={classes.join(" ")}>
          <Slide
            title={this.state.slides[this.state.currentSlide].title}
            image={this.state.slides[this.state.currentSlide].imageUrl}
            description={this.state.slides[this.state.currentSlide].description}
            details={this.state.slides[this.state.currentSlide].details}
            count={this.state.currentSlide + 1}
            changeSlide={this.changeSlide}
            slideLength={this.state.slides.length}
          />
        </div>
      );
    }
  }
  
  class Slide extends React.Component {
    constructor() {
      super();
  
      this.state = {};
    }
    render() {
      return (
        
        <div className="slide">
          <div className="slide__decorative-sidebar">
            <img src={this.props.image} />
          </div>
          <video src={video} id="background-video" autoPlay loop muted typeof='video/mp4'/>
          <div className="slide__info">
            <div className="slide__info__text">
              <h1 className="slide__info__title">{this.props.title}</h1>
              <p className="slide__info__description">{this.props.description}</p>
            </div>
            <img
              src={this.props.image}
              alt={this.props.title}
              className="slide__info__image"
            />
            <div className="slide__arrows">
              <a
                className={
                  this.props.count > 1
                    ? `slide__arrows__arrow`
                    : `slide__arrows__arrow slide__arrows__arrow--disabled`
                }
                onClick={e => this.props.changeSlide("left")}
              >
                {`<`}
                {/* shrug */}
              </a>
              <a
                className={
                  this.props.count < this.props.slideLength
                    ? `slide__arrows__arrow`
                    : `slide__arrows__arrow slide__arrows__arrow--disabled`
                }
                onClick={e => this.props.changeSlide("right")}
              >
                {`>`}
              </a>
            </div>
          </div>
  
          <div className="slide__next">
            <span>Next: information</span>
          </div>
  
          <div className="slide__details">
            <div className="slide__details__title">Discover the details</div>
  
            <div className="slide__details__block slide__details__block--temp">
              <h3 className="slide__details__subtitle">Tech Stack</h3>
              <p className="slide__details__block__description">
                {this.props.details.tech_stack}
              </p>
            </div>
  
            <div className="slide__details__block slide__details__block--progress">
              <h3 className="slide__details__subtitle">Progress</h3>
              <p className="slide__details__block__description">
                {this.props.details.progress}
              </p>
            </div>
  
            <div className="slide__details__block slide__details__block--Platform">
              <h3 className="slide__details__subtitle">Platform</h3>
              <p className="slide__details__block__description">
                {this.props.details.Platform}
              </p>
            </div>
          </div>
  
          <div className="slide__count">
            <p className="slide__count__title">Explore</p>
            <span className="slide__count__count">
              0<span>{this.props.count}</span>
            </span>
          </div>
        </div>
      );
    }
  }
  
  // RENDER
export default Projects
  
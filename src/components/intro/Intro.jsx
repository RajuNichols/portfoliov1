import "./intro.css"
import me from "./../../img/metest.png"

function Intro() {
  return (
    <div className="top">
      <div className="top-left">
        <div className="top-left-wrapper">
          <h2 className="top-intro">Hello, My name is</h2>
          <h1 className="top-name">Raju Nichols</h1>
          <div className="top-title">
            <div className="top-title-wrapper">
              <div className="top-title-item">College Student</div>
              <div className="top-title-item">Web Developer</div>
              <div className="top-title-item">Gamer</div>
              <div className="top-title-item">Learner</div>
            </div>
          </div>
          <p className="top-desc">
            I'm a full time student studying computer science at The University
            of Missouri. I enjoy Web Development and hope to become a full stack
            developer. In my free time I like playing video games, as well as
            learning to keep my mind sharp.
          </p>
        </div>
        
      </div>

      <div className="top-right">
        <div className="top-bg"></div>
        <img src={me} alt="me profile pic" className="top-img" />
      </div>
    </div>
  );
}

export default Intro;

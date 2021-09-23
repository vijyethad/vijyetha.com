import * as React from "react";
import "./Intro.scss";

const Intro = () => {
  return (
    <div className="introRoot">
      <p className="text-primary helloWorld">Hello World! My name is</p>
      <h1 className="heroText">Vijyetha Dhanasekaran.</h1>
      <h1 className="heroText title">I love exploring new things!</h1>
      <div className="pt-4 w-75 aboutMe">
        <p>
          I'm a Senior Software Engineer with a goal-driven creative mindset and
          passion for learning and innovating.
        </p>
        <p>
          Outside work, I love to code, sing, dance, cook, do arts and crafts,
          and learn new skills.
        </p>
      </div>
      <button type="button" className="btn btn-outline-primary mt-4">
        Contact Me!
      </button>
      <div className="helperText">
        <p className="mt-4">
          <small>
            Find me at <a href="#">GitHub</a> & <a href="#">LinkedIn</a>
            <br />
            Download <a href="#">my resume</a> (PDF)
          </small>
        </p>
      </div>
    </div>
  );
};

export default Intro;

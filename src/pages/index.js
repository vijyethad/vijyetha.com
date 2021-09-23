import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./index.scss";
import Intro from "../components/Intro";

const IndexPage = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = React.useRef(null);

  React.useEffect(() => {
    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });

    ScrollTrigger.create({
      snap: 1 / 4,
    });
  });

  return (
    <div ref={ref}>
      <title>Home Page</title>
      <div style={{ display: "grid" }}>
        <div className="description panel blue">
          <Intro />
        </div>
      </div>
      <section className="panel red">ONE</section>

      <section className="panel orange">TWO</section>
      <section className="panel purple">THREE</section>
      <section className="panel green">FOUR</section>
    </div>
  );
};

export default IndexPage;

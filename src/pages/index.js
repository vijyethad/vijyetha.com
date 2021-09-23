import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./index.scss";

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
      <div class="description panel blue">
        <div>
          <h1>Vijyetha Dhanasekaran</h1>
        </div>
      </div>

      <section class="panel red">ONE</section>
      <section class="panel orange">TWO</section>
      <section class="panel purple">THREE</section>
      <section class="panel green">FOUR</section>
    </div>
  );
};

export default IndexPage;

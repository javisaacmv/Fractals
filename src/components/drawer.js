import React from "react";

import Sketch from "react-p5";

const Drawer = () => {
  let angle = 0;
  let variation = 0;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(2000, 1200).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background("#FFFFFF");
    angle = 3.14159 / 6;
    p5.stroke(0, 255, 33);
    p5.translate(1000, 1200);
    branch(p5, 250);
  };

  const branch = (p5, len) => {
    let c = "#CA9F74";
    p5.strokeWeight(4);
    if (len < 20) {
      p5.strokeWeight(1);
      c = "#FFCCFF";
    }
    p5.stroke(c);
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);

    variation = p5.random(0.5, 0.9);

    if (len > 1) {
      p5.push();
      p5.rotate(angle);
      branch(p5, len * variation);
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(p5, len * variation);
      p5.pop();
    } else {
      return;
    }
  };
  return <Sketch setup={setup} draw={draw} />;
};

export default Drawer;

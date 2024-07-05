import React from "react";
import Typewriter from "typewriter-effect";
import "./Type.css"

function Type() {
  return (
    <div className="typewriter">
         <Typewriter
      options={{
        strings: [
          "  CODING ENTHUSIAST ",
          "  LEARNER  ",
          "  MERN STACK DEVELOPER ",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </div>
   
  );
}

export default Type;
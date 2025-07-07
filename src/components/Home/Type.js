import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "<%= Data Scientist %>",
          "<%= Software And MERN Stack Developer %>",
          "<%= Blockchain And Smart Contract Developer %>",
          "<%= Open Source Contributor %>",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

import React from "react";
import Header from "./SectionHeader";

const About = () => {
  return (
    <div className="about">
      <Header sectionName={`<about me />`} />
      <p>
        My Mantra: “You have to keep working on your craft, specially when
        nobody is watching” <br />
        I am currently seeking SWE roles for Summer 2021 and am looking for an
        environment that fosters collaboration, values career development, and
        believes in supporting a growth mindset. <br />
        I have been working with Python and Java for two years and am highly
        experienced in working in an Agile environment. My favorite side project
        so far has to be developing an anonymous hiring app using Flutter with
        the goal of mitigating discrimination in the hiring process for
        companies. <br />
        I’m always open to taking on exciting challenges and developing new
        skills in the process. Outside my coursework, I am currently learning to
        develop web applications using Javascript and delve deeper into app
        development with Flutter. <br />
        If you feel like you may have an opportunity for me or would just love
        to chat about anything from basketball to technology, feel free to
        connect with me on LinkedIn or email me!
      </p>
    </div>
  );
};

export default About;

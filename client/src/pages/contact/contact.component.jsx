import React from "react";
import "./contact.styles.scss";

const ContactPage = () => (
  <div className="contact">
    <div className="title">
      Hi, I am Nikhil Kumar Sharma, I am a web developer!
    </div>
    <div className="info">
      So I have pretty cool skills under my belt. I can design web apps. I
      absoultely love the process of creating. I am proficient with React,
      JavaScript, NodeJs, Express, MongoDb, MySQL, HTML, CSS, SCSS.
    </div>
    <div class="social">
      <a
        href="https://twitter.com/wannabe_nikhil"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-twitter fa-3x" />
      </a>
      <a
        href="https://www.instagram.com/nikhil.shawarma"
        rel="noreferrer"
        target="_blank"
      >
        <i class="fab fa-instagram fa-3x"></i>
      </a>
      <a
        href="https://github.com/nikhil-sharma-nks"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-github fa-3x"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/nikhil-sharma-nks/"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fab fa-linkedin fa-3x"></i>
      </a>
    </div>
  </div>
);
export default ContactPage;

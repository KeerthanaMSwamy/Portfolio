import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Keerthana MS </span>
            and I'm from <span className="purple"> Karnataka, India.</span>
            <br />
            I am currently a fourth year Computer Science Engineering Undergrad at SJB Institute Of Technology.
            <br />
    
            <br />
            Apart from programming, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play the Guitar 🎸
            </li>
            <li className="about-activity"> 
              <ImPointRight /> Travelling ✈️
            </li>
            <li className="about-activity">
              <ImPointRight /> Attend meetups 👩🏾‍💻
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

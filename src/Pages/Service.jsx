import React from "react";
import Navigation from "../Components/Navigation";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Button } from "react-bootstrap";
const Service = () => {
  return (
    <>
      <Navigation />
      <div class="d-flex justify-content-center contact-page-heading">
        <h1>Features and Services.</h1>
      </div>
      <div className="container mt-4 mx-auto d-block">
        <CardGroup>
          <Card
            className="border-0"
            style={{ backgroundColor: "rgb(240,240,240)" }}
          >
            <Card.Img
              variant="top"
              className="mx-auto d-grid style-be"
              src="./front-end img.png"
            />
            <Card.Body className="text-align-center mt-3">
              <div className="card-heading-style border-bottom">
                Front-end Development
              </div>
              <Card.Text className="service-card-text">
                As a professional Front-end Developer, I have created many
                custom Landing Pages, UI's, Web Pages, and Animated Pages using
                custom HTML5, CSS3, JavaScript, Bootstrap, jQuery, SASS,
                React.JS, and custom frameworks like MUI e.t.c. I can help you
                out in Building extra-ordinary eye-catchy Web Pages. And, also I
                can convert your provided Designs i.e Adobe, Fgima, XD to
                Complete (Pixel-Perfect) Web pages.
              </Card.Text>
              <Button
                variant="light"
                className="px-4 border-white rounded-pill"
              >
                ReactJS
              </Button>
              <Button
                variant="light"
                className="border-white px-3 rounded-pill"
              >
                JavaScript
              </Button>
              <Button variant="light" className=" border-white rounded-pill">
                Bootstrap
              </Button>
              <Button
                variant="light"
                className="px-4 border-white rounded-pill"
              >
                CSS
              </Button>
              <Button
                variant="light"
                className=" px-4 border-white rounded-pill"
              >
                API's
              </Button>
              <Button
                variant="light"
                className=" px-4 border-white rounded-pill"
              >
                HTML
              </Button>
            </Card.Body>
          </Card>
          <Card
            className="border-0"
            style={{ backgroundColor: "rgb(240,240,240)" }}
          >
            <Card.Img
              variant="top"
              className="mx-auto d-grid style-be"
              src="./back-end img.png"
              style={{ width: 250, height: 250 }}
            />
            <Card.Body className="customCardTxt">
              <div className="card-heading-style border-bottom">
                Back-end Development
              </div>
              <Card.Text className="service-card-text">
                With the help of Back-end Technologies, I have integrated many
                custom Business Models inside a Business using different
                Languages and Databases (including Firebase). I have hands on
                experience in PHP (Laravel), API's integration, NodeJS with
                Database i.e. MySQL, MS SQL Server, and MongoDB. I can provide
                you custom solutions for your requirements. Feel free to get in
                touch!
              </Card.Text>
              <div className="service-buttons">
                <Button
                  variant="light"
                  className="px-4 border-white rounded-pill"
                >
                  NodeJS
                </Button>
                <Button
                  variant="light"
                  className="border-white px-3 rounded-pill"
                >
                  PHP
                </Button>
                <Button variant="light" className=" border-white rounded-pill">
                  Java
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card
            className="border-0"
            style={{ backgroundColor: "rgb(240,240,240)" }}
          >
            <Card.Img
              className="mx-auto style-db"
              variant="top"
              src="./database img.png"
              style={{ width: 240, height: 233 }}
            />
            <Card.Body className="mt-3">
              <div className="card-heading-style border-bottom">
                Database Designing
              </div>
              <Card.Text className="service-card-text">
                As a Full-Stack Web developer, I have used Relational and
                Non-Relational Database Systems, according to the need of the
                Projects. I have also hands on experience in Firebase. For small
                projects, I have implemented No SQL DB. I can integrate the
                Database with the help of creating Servers for the Project. I
                have also implemented 2 appraches in Databases, i.e. Code First
                Approach and Database First Approach in .NET Framework.
              </Card.Text>
              <Button
                variant="light"
                className="px-4 border-white rounded-pill"
              >
                MySQL
              </Button>
              <Button
                variant="light"
                className=" px-4 border-white rounded-pill"
              >
                MongoDB
              </Button>
              <Button
                variant="light"
                className=" px-3 border-white rounded-pill"
              >
                MS SQL Server
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};

export default Service;

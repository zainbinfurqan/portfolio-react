import React from "react";
import Navigation from "../Components/Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Row className="mt-5">
          <Col>
            <div className="about-heading">About Me</div>
            <div className="about-para">
              As a BS Information Technology grad. from International Islamic
              University Islamabad, I have gained a vast knowledge in
              self-learning, critical-thinking, and close to new tech. I
              graduated in 2022 and from my last semester, I am working as a Web
              Developer in multiple organizations. Being a Web Developer, I did
              Freelancing during my graduation. I can provide you the custom
              solutions of your business model/projects. I have worked with
              React.JS, Custom Coding with Packages, Firebase, Database, and
              PHP. Please share your requirements, and I'll provide you the best
              solution (from development to deployment). For further queries,
              you may directly contact me. Thank you.
            </div>
          </Col>
          <Col xs={12} md={5} lg={4}>
            <div className="about-main-image">
              <img
                className="mt-md-3"
                src="./about-imag.jpg"
                alt=""
                srcset=""
                width={380}
              />
            </div>
          </Col>
        </Row>
        <hr />
        <Row className="mt-2">
          <Col xs={12} lg={6}>
            <h1 className="education-heading">Education</h1>
          </Col>
        </Row>

        <div className="border-bottom rounded-pill bg-light education-text-style col-lg-6 col-md-10">
          International Islamic University, Islamabad - 2022
        </div>
        <Card.Body>
          <div className="education-text-inner-style">
            BS in Information Technology
          </div>
          <div className="education-text-inner-style">3.02/4.00 CGPA</div>

          <Button
            variant="secondary"
            className="mb-2 border rounded-pill border-white"
          >
            OOP
          </Button>
          <span>
            <Button
              variant="secondary"
              className="mb-2 border rounded-pill border-white"
            >
              DSA
            </Button>
          </span>
          <span>
            <Button
              variant="secondary"
              className="mb-2 border rounded-pill border-white"
            >
              DBT
            </Button>
          </span>
          <span>
            <Button
              variant="secondary"
              className="mb-2 border rounded-pill border-white"
            >
              CCN
            </Button>
          </span>
        </Card.Body>

        <div className="border-bottom rounded-pill bg-light education-text-style col-lg-6 col-md-10">
          Base College of Science and Commerce, Wah Cantt - 2017
        </div>
        <Card.Body>
          <div className="education-text-inner-style">FSc-Pre Eng.</div>
          <div className="education-text-inner-style">A Grade</div>
          <Button
            variant="secondary"
            className="mb-2 border rounded-pill border-white"
          >
            MATH
          </Button>
          <span>
            <Button
              variant="secondary"
              className="mb-2 border rounded-pill border-white"
            >
              PHY
            </Button>
          </span>
          <span>
            <Button
              variant="secondary"
              className="mb-2 border rounded-pill border-white"
            >
              CHEM
            </Button>
          </span>
        </Card.Body>

        <div className="border-bottom rounded-pill bg-light education-text-style col-lg-6 col-md-10">
          F.G Public High School, HIT, Taxila Cantt - 2015
        </div>
        <Card.Body>
          <div className="education-text-inner-style">Matriculation</div>
          <div className="education-text-inner-style">A Grade</div>
          <Button
            variant="secondary"
            className="mb-2 border rounded-pill border-white"
          >
            MATH
          </Button>
          <span>
            <Button
              variant="secondary"
              className="mb-2 border rounded-pill border-white"
            >
              PHY
            </Button>
          </span>
          <span>
            <Button
              variant="secondary"
              className="mb-2 border rounded-pill border-white"
            >
              COMP
            </Button>
          </span>
        </Card.Body>
        <Row className="mt-2">
          <Col xs={12} lg={6}>
            <h1 className="education-heading">Experience</h1>
          </Col>
        </Row>
        <Card className="border-0 col-lg-8 col-md-10">
          <div className="rounded-pill border-start bg-light experience-heading-style">
            Codlers
          </div>
          <Card.Body>
            <Card.Title>Front-End Web Developer</Card.Title>
            <Card.Text>
              Currently, I am Working as Front-End Web Developer in Codlers. My
              responsibility is to create Web Pages, with the help of custom
              properties in HTML, CSS, JavaScript, Bootstrap, jQuery, SASS. I
              have been working as Front-End Developer here since 4 Months.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted experience-footer-style">
            Jan 2023 - Continue
          </Card.Footer>
        </Card>

        <Card className="border-0 mt-4 col-lg-8 col-md-10">
          <div className="rounded-pill border-start bg-light experience-heading-style">
            Developers Hub
          </div>
          <Card.Body>
            <Card.Title>Web Developer</Card.Title>
            <Card.Text>
              I have worked as Web Developer in Developers Hub. I have created
              many Web Pages, and make sure to fulfill the given requirements
              for the project. I have completed all my sites, with 100%
              Pixel-Perfect and complete Responsive Design.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted experience-footer-style">
            May 2022 - Sep 2022
          </Card.Footer>
        </Card>
      </Container>
      <hr />
    </>
  );
};

export default About;

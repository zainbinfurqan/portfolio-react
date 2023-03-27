import React from "react";
import Navigation from "../Components/Navigation";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Contact = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <div class="d-flex justify-content-center contact-page-heading">
          <h1>Get In Touch</h1>
        </div>
        <Form className="col-lg-5 col-md-6 col-sm-6 col-10 d-block mx-auto contact-form-style">
          <Row className="mb-3">
            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="mb-2 rounded-pill border-0"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="rounded-pill border-0"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Subject</Form.Label>
            <Form.Control className="rounded border-0" as="textarea" rows={3} />
          </Form.Group>

          <Button
            href="mailto:hsnfarooq99@example.com"
            className="d-block mx-auto rounded-pillscol-lg-6 mt-5 col-md-6"
            variant="primary"
            type="submit"
          >
            Submit Response
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Contact;

import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from '../imgs/404.jpeg';
import { Container, Row, Col, Button } from 'react-bootstrap';

const NotFoundPage = () => {
  return (
    <Container className="text-center">
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <img src={notFoundImage} alt="404 Not Found" className="img-fluid" />
          <h2 className="mt-4">Oops! Page not found.</h2>
          <p>The page you are looking for was not found or the link is incorrect.</p>
          <Link to="/en">
            <Button variant="primary">Back to home page</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;

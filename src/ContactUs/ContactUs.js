import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ContactUs = () => {
	return (
		<Container id="contact-us" className="mb-5 txtali-l">
			<Row>
				<Col md={{ span: 4 }}>
					<img
						alt=""
						src="/leaf.png"
						width="200"
						height="200"
						className="d-inline-block align-top"
					/>
				</Col>
				<Col md={8}>
					<h5 className="title">Contact us</h5>
					<Form>
						<Form.Group controlId="formGroupPassword">
							<Form.Control
								required
								type="text"
								placeholder="Your name"
							/>
						</Form.Group>
						<Form.Group controlId="formGroupEmail">
							<Form.Control
								required
								type="email"
								placeholder="Your email address"
							/>
						</Form.Group>
						<Form.Group controlId="formGroupEmail">
							<Form.Control
								required
								type="text"
								placeholder="Your message"
							/>
						</Form.Group>
						<Col md={{ span: 2, offset: 10 }}>
							<Button type="submit" size="sm" className="customBtn">
								Send
							</Button>
						</Col>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default ContactUs;

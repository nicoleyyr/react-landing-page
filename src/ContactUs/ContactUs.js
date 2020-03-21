import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ContactUs = () => {
	return (
		<Container className="mb-5 txtali-l">
			<Row>
				<Col md={{ span: 3, offset: 1 }}>
					<p>Image</p>
				</Col>
				<Col md={7}>
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
						<Button type="submit">Sent</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default ContactUs;

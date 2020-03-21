import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const aboutUs = () => {
	const style = {
		marginTop: "100px"
	};
	return (
		<Container id="about-us" className="mb-5 txtali-l">
			<Row>
				<Col md={{ span: 6 }}>
					<img
						className="d-block w-100"
						src="./aboutus.jpg"
						alt="First slide"
						fluid="true"
						height="350px"
					/>
				</Col>
				<Col md={{ span: 6 }}>
					<div style={style}>
						<h5 className="title">About us</h5>
						<p className="text">
							A wonder vacation on dream. The beach with the
							breeze, enjoying the sunset in summer, and bathing
							the star at midnight. What an amazing thing when you
							wake up in the morning with the view formed the sky,
							the mountains and the ocean in front of you. You can
							totally relax yourself with the bright and tidy
							room, the astonishing scene, and our sweet service.
							Faraway from the noist city right now.
						</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default aboutUs;

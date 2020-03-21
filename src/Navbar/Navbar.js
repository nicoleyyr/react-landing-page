import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const navbar = () => {
	return (
		<Navbar className="justify-content-between" fixed="top" bg="white">
			<Container>
				<Navbar.Brand href="#home">Test Hotel</Navbar.Brand>
				<Nav className="justify-content-end">
					<Nav.Link href="#about-us">About us</Nav.Link>
					<Nav.Link href="#rooms">Rooms</Nav.Link>
					<Nav.Link href="#contact-us">Contact us</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default navbar;

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "./Navbar/Navbar";
import Carousel from "./Carousel/Carousel";
import AboutUs from "./AboutUs/AboutUs";
import Rooms from "./Rooms/Rooms";
import ContactUs from "./ContactUs/ContactUs";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	return (
		<div className="App">
			<Container>
				<Row>
					<Navbar />
          <Carousel />
          <AboutUs />
          <Rooms />
          <ContactUs />
				</Row>
			</Container>
		</div>
	);
}

export default App;

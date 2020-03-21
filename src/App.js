import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "./Navbar/Navbar";
import Carousel from "./Carousel/Carousel";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			<Container>
				<Row md={{ span: 8, offset: 1 }}>
					<Navbar />
          <Carousel />
				</Row>
			</Container>
		</div>
	);
}

export default App;

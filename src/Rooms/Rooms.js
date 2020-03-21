import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FixedSizeGrid as Grid } from "react-window";

const Rooms = () => {
	const [imgState] = useState(
		{ src: "./mainpage.jpg", alt: "Main Room" },
		{ src: "./singleRoom.jpeg", alt: "Single Room" },
		{ src: "./DeluxeDoubleRoom.jpg", alt: "Deluxe Double Room" },
		{ src: "./DeluxeSingleRoom.jpg", alt: "Deluxe Single Room" },
		{ src: "./DeluxeTwinRoom.jpg", alt: "Deluxe Twin Room" },
		{ src: "./DeluxeRoom.jpg", alt: "Deluxe Room" },
		{ src: "./TwinRoom.jpg", alt: "Twin Room" },
	);
	const Cell = () => (
		<img src={imgState.src} alt={imgState.alt} width="200" height="200" />
	);
	const style = {
		backgroundColor: "#E6E4DC"
	};
	const style2 = {
		marginTop: "100px"
	};
	return (
		<Jumbotron id="rooms" className="pt-0 pb-0" style={style} fluid>
			<Container className="txtali-l">
				<Row>
					<Col md={{ span: 3, offset: 1 }}>
						<div style={style2}>
							<h5 className="title">Rooms</h5>
							<p className="text">
								Nova Sky comprises 67 suites. Each one artfully
								combines the ultimate in luxury, comfort and
								sophistication. Every living space, gives a new
								definition to opulence and splendour, which
								contemporary finishes and premium facilities.
							</p>
						</div>
					</Col>
					<Col md={7}>
						<Grid
							rowCount={2}
							columnCount={3}
							rowHeight={200}
							columnWidth={200}
							height={400}
							width={900}
						>
							{Cell}
						</Grid>
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	);
};

export default Rooms;

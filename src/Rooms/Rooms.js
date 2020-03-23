import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FixedSizeGrid as Grid } from "react-window";

const Rooms = () => {
	const imgsArray = [
		[
			{ src: "./DeluxeDoubleRoom.jpg", alt: "Deluxe Double Room" },
			{ src: "./DeluxeSingleRoom.jpg", alt: "Deluxe Single Room" },
			{ src: "./DeluxeTwinRoom.jpg", alt: "Deluxe Twin Room" }
		],
		[
			{ src: "./DoubleRoom.jpg", alt: "Double Room" },
			{ src: "./singleRoom.jpeg", alt: "Single Room" },
			{ src: "./TwinRoom.jpg", alt: "Twin Room" }
		],
		[
			{ src: "./DeluxeDoubleRoom.jpg", alt: "Deluxe Double Room" },
			{ src: "./DeluxeSingleRoom.jpg", alt: "Deluxe Single Room" },
			{ src: "./DeluxeTwinRoom.jpg", alt: "Deluxe Twin Room" }
		],
		[
			{ src: "./DoubleRoom.jpg", alt: "Double Room" },
			{ src: "./singleRoom.jpeg", alt: "Single Room" },
			{ src: "./TwinRoom.jpg", alt: "Twin Room" }
		],
		[
			{ src: "./DeluxeDoubleRoom.jpg", alt: "Deluxe Double Room" },
			{ src: "./DeluxeSingleRoom.jpg", alt: "Deluxe Single Room" },
			{ src: "./DeluxeTwinRoom.jpg", alt: "Deluxe Twin Room" }
		],
		[
			{ src: "./DoubleRoom.jpg", alt: "Double Room" },
			{ src: "./singleRoom.jpeg", alt: "Single Room" },
			{ src: "./TwinRoom.jpg", alt: "Twin Room" }
		]
	];
	const Cell = ({ columnIndex, rowIndex, style }) => (
		<div style={style}>
			<img
				src={imgsArray[rowIndex][columnIndex].src}
				alt={imgsArray[rowIndex][columnIndex].alt}
				width="200"
				height="200"
			/>
			<div style={styleCaption}>
				<p>{imgsArray[rowIndex][columnIndex].alt}</p>
			</div>
		</div>
	);
	const styleJumbontron = {
		backgroundColor: "#E6E4DC",
		height: "400px"
	};
	const styleText = {
		marginTop: "100px"
	};
	const styleCaption = {
		position: "absolute",
	    right: "15%",
	    top: "45%",
	    left: "15%",
	    zIndex: "10",
	    color: "#fff",
	    textAlign: "center"
	};
	return (
		<Jumbotron
			id="rooms"
			className="pt-0 pb-0"
			style={styleJumbontron}
			fluid
		>
			<Container className="txtali-l">
				<Row>
					<Col md={{ span: 3, offset: 1 }}>
						<div style={styleText}>
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
							className="Grid"
							columnCount={3}
							columnWidth={200}
							height={400}
							rowCount={6}
							rowHeight={200}
							width={600}
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

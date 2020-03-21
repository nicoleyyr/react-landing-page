import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FixedSizeGrid as Grid } from "react-window";

const Cell = () => (
	<div>
		<img className="d-block w-150 h-150" src="./singleRoom.jpeg" alt="singleRoom"/>
    <p>Single Room</p>
	</div>
);

const rooms = () => {
	const style = {
    backgroundColor: "#E6E4DC",
    padding: "0 2rem !important"
	};
	return (
		<Jumbotron style={style} fluid>
			<Container className="mb-5 txtali-l">
				<Row>
					<Col md={{ span: 3, offset: 1 }}>
						<div>
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
							columnCount={100}
							columnWidth={100}
							rowCount={1}
							rowHeight={150}
							height={150}
							width={150}
						>
							{Cell}
						</Grid>
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	);
};

export default rooms;

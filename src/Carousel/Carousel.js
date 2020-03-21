import React from "react";
import Carousel from "react-bootstrap/Carousel";

const carousel = () => {
  const style = {
		height: "450px"
  };
  
	return (
		<Carousel className="mb-5" interval="2000" indicators="false">
			<Carousel.Item style={style}>
				<img
					className="d-block w-100"
					src="./mainpage.jpg"
          alt="First slide"
          fluid="true"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style={style}>
				<img
					className="d-block w-100"
					src="./mainpage.jpg"
					alt="Second slide"
          fluid="true"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style={style}>
				<img
					className="d-block w-100"
					src="./mainpage.jpg"
					alt="Third slide"
          fluid="true"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default carousel;

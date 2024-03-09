import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div class="trafficlight">
			<div class="protector"></div>
			<div class="protector"></div>
			<div class="protector"></div>
			<div class="red"></div>
			<div class="yellow"></div>
			<div class="green"></div>
		</div>
	);
};

export default Home;

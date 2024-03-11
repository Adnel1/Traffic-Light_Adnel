import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Fragment } from "react/cjs/react.production.min";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState(null);
	const [purpleLight, setPurpleLight] = useState(false);

	// handles the event for the cycle lights button
	let counter = -1;
	let colors = ["red", "yellow", "green"];
	const cycleLightHandler = () => {
		counter++;
		//(counter < color.length - 1) ? counter++ : counter = 0;
		setSelectedColor(colors[counter]);
		console.log(colors[counter]);
	};

	// handles purple light
	const purpleLightHandler = () => {
		setPurpleLight(!purpleLight);
	};

	return (
		<Fragment>
			<div className="container text-center">
				<div className="trafficlight mb-4" id="lights">
					{
						//<div className="protector"></div>
					}
					<div onClick={() => setSelectedColor("red")} className={"red" + ((selectedColor === "red") ? " glow-red" : "")}></div>
					<div onClick={() => setSelectedColor("yellow")} className={"yellow" + ((selectedColor === "yellow") ? " glow-yellow" : "")}></div>
					<div onClick={() => setSelectedColor("green")} className={"green" + ((selectedColor === "green") ? " glow-green" : "")}></div>
					{purpleLight === true && <div onClick={() => setSelectedColor("purple")} className={"purple" + ((selectedColor === "purple") ? " glow-purple" : "")}></div>}
				</div>
				<div>
					<button onClick={cycleLightHandler} type="button" className="btn btn-primary m-2">Cycle Light</button>
					<button onClick={purpleLightHandler} type="button" className="btn btn-success m-2">Purple Light</button>
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
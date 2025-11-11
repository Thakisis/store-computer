import React from "react";

function Hero(props) {
	return (
		<div className="bg-purple-500/30 w-full h-screen flex  items-center justify-center text-[6rem] font-bold text-white bg-black relative -z-1">
			<img
				src="/bg-hero.jpg"
				alt="logo"
				className="w-full h-full absolute object-cover "
			/>
			<div className="relative w-full h-full inset-0 flex flex-col justify-center items-center ">
				<div className="flex-1 mt-10"></div>
				<h1>hero</h1>
				<div className="flex flex-col flex-1 justify-end text-2xl font-bold text-[3rem] mb-10    ">
					Aqui va el texto para el hero
				</div>
			</div>
		</div>
	);
}

export default Hero;

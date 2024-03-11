import React from "react";
//include images into your bundle

import NavBar from "./Nav";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";
import Cristiano from "../../img/cristiano-ronaldo.jpg";
import Messi from "../../img/lionel-messi.jpg";
import Zidane from "../../img/zinedine-zidane.jpg"
import Mbappe from "../../img/kylliam-mbappe.jpg"


const cards = [
	{
		image: Cristiano,
		title: "Cristiano Ronaldo",
		description: "El jugador mejor jugador de la historia del Real Madrid"
	},
	{
		image: Messi,
		title: "Lionel Messi",
		description: "El Capi, campeon del mundo, mejor jugador de la historia del Barcelona y de Argentina"
	},
	{
		image: Zidane,
		title: "Zinedine Zidane",
		description: "El mago del balon, una leyenda absoluta del futbol Frances"
	},
	{
		image: Mbappe,
		title: "Kylliam Mbappe",
		description: "La nueva leyenda del fútbol, con mas de una decada de carrera por venir"
	},
];

//create your first component
const Home = () => {
	
	return (
		<div className="container-fluid bg-secondary vh-100">
		<NavBar/>
		<Jumbotron/>
		<Card cards={cards}/>
		<Footer/>
		</div>
	);
};

export default Home;

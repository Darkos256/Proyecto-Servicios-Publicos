import React from 'react'
import '../../App.css';
import Cards from "../../Components/Cards/Cards";
import Slideshows from "../../Components/Slideshow/Slideshows";


const Home = () => {
  return (
    <>
		<div className="Slideshow">
			<Slideshows/>
		</div>
			<h1 className="tiltle">Guía de Trámites</h1>
			<p className="text">Aquí puedes encontrar una orientación de todo lo que puedes hacer a través de nuestra página web.</p>
		<div className="Card">
			<Cards/>
		</div>
  </>

  )
}

export default Home;
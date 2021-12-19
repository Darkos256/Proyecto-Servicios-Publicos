import React from "react";

import Card from "./Card";

import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'

const cards = [
  {
    id: 1,
    title: "Pagar tu factura",
    text: "Paga tu factura desde la comodidad de tu hogar u oficina",
    image: image4,
    url: "/consulta",
  },
  {
    id: 2,
    title: "PQR",
    text: "Tienes alguna pregunta?",
    image: image1,
    url: "#",
  },
  {
    id: 4,
    title: "Reportar daño",
    text: "Aquí puedes reportar un daño en tu vivienda o sector. ",
    image: image2,
    url: "#",
  },
  {
    id: 3,
    title: "Mantenimientos",
    text: "Con el firme propósito de mejorar el servicio de agua, realizaremos mantenimientos preventivos, los cuales podrás consultar aquí.",
    image: image3,
    url: "#",
  },
  
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, text, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} text={text} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
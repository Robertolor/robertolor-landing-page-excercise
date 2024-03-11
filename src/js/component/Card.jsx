import React from "react";

const cardStyle = {
    width: '450px',
    height: '550px',
}

const imageStyle = {
    width: '100%',
    height: '325px',
}
//create your first component
const Card = (props) => {
    return (
        <div className="d-flex gap-2 justify-content-between mt-2">
            {props.cards.map((card, index) => (
                <div key={index} className="card" style={cardStyle}>
                    <img src={card.image} className="card-img-top" style={imageStyle} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.description}</p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;


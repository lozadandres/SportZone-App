import React from 'react';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  color: string[];
  size: string[];
}

const Card: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card__img" />
      <div className="card__content">
        <div className="card__data">
          <h1 className="card__title">{product.title}</h1>
          <span className="card__color">Colores: {product.color.join(', ')}</span>
          <span className="card__size">Tamaños: {product.size.join(', ')}</span>
          <span className="card__price">Precio: {product.price}</span>
          <p className="card__description">{product.description}</p>
          <a href="#" className="card__button">Cómpralo ahora</a>
        </div>
      </div>
    </div>
  );
};

export default Card;


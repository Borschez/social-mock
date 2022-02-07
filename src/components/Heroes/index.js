import React, { useState } from 'react';
import './style.css';

const ImageCounter = (props) => {
  return (
    <div className="image-count">
      <div className="count">{props.count}</div>
      <img src={props.imageUrl} onClick={props.onCount} />
    </div>
  );
};

const Hero = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <div className="container">
      <ImageCounter
        imageUrl={props.imageUrl}
        count={count}
        onCount={handleClick}
      />
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
};

const HeroesList = (props) => {
  return (
    <div className="container">
      {props.heroes.map(({ id, imageUrl, title, subtitle }) => (
        <Hero key={id} imageUrl={imageUrl} title={title} subtitle={subtitle} />
      ))}
    </div>
  );
};

export default HeroesList;

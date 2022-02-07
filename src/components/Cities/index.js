import React from 'react';
import './style.css';

export const City = (props) => {
  const currentIndex = props.currentIndex;
  const city = props.city;

  const handleDescriptionChange = (e) => {
    props.onChangeCity(currentIndex, { ...city, description: e.target.value });
  };

  return (
    <div>
      <h3>{city.name}</h3>
      <textarea value={city.description} onChange={handleDescriptionChange} />
    </div>
  );
};

const CitiesList = (props) => {
  return (
    <ul>
      {props.cities.map((city, index) => (
        <li
          key={city.name}
          title={city.description}
          onClick={() => props.onSelectCity(index)}
        >
          {city.name} ({city.description})
        </li>
      ))}
    </ul>
  );
};

export default CitiesList;

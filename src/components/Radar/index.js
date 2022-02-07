import React, { useState } from 'react';
import './style.css';

const speedLimit = 60;

const OverSpeedIndicator = ({ kms }) => {
  const isOverSpeed = kms > speedLimit;
  return (
    <section style={{ background: isOverSpeed ? 'red' : 'none' }}>
      Ограничение скорости в {speedLimit} км/ч{' '}
      {isOverSpeed ? 'превышено' : 'не превышено'}
    </section>
  );
};

const scaleName = { km: 'километрах/час', mile: 'милях/час' };

const SpeedInput = ({ scale, speed, onSpeedChange }) => {
  const handleChange = (e) => {
    const speed = e.target.value;
    onSpeedChange(speed);
  };

  return (
    <fieldset>
      <legend>Введенная скорость в {scaleName[scale]}</legend>
      <input type="number" value={speed} onChange={handleChange} />
    </fieldset>
  );
};

const toMiles = (kms) => {
  return kms * 0.621371;
};

const toKilometers = (miles) => {
  return miles / 0.621371;
};

const Radar = (props) => {
  const [scale, setScale] = useState('km');
  const [speed, setSpeed] = useState(40);

  const kms = scale === 'km' ? speed : toKilometers(speed);
  const miles = scale === 'mile' ? speed : toMiles(speed);

  const handleKilometersChange = (speed) => {
    setScale('km');
    setSpeed(speed);
  };

  const handleMilesChange = (speed) => {
    setScale('mile');
    setSpeed(speed);
  };

  return (
    <>
      <SpeedInput
        scale="km"
        speed={kms}
        onSpeedChange={handleKilometersChange}
      />
      <SpeedInput
        scale="mile"
        speed={miles}
        onSpeedChange={handleMilesChange}
      />
      <OverSpeedIndicator kms={kms} />
    </>
  );
};

export default Radar;

import React from 'react';

import Slider03 from '../../../assets/images/businessInteligence.jpg';

const Slider2 = ({ text }: { text: string }) => {
  return (
    <img
      className="d-block w-100"
      style={{ width: '100%', height: '500px', objectFit: 'cover' }} // Ajuste as dimensões conforme necessário
      src={Slider03}
    />
  );
};

export default Slider2;

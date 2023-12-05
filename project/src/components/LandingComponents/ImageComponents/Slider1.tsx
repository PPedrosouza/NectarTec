import React from 'react';

import Slider01 from '../../../assets/images/welcomeNectar.jpg';

const Slider1 = ({ text }: { text: string }) => {
  return (
    <img
      className="d-block w-100"
      style={{ width: '100%', height: '500px', objectFit: 'cover' }} // Ajuste as dimensões conforme necessário
      src={Slider01}
      alt={text}
    />
  );
};

export default Slider1;

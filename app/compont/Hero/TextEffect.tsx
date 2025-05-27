"use client"
import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'CODER..',
        1300, 
        'Mean Stack..',
        1300,
        'Mern Stack..',
        1300,
        'DESIGNER..',
        1300
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
export default TextEffect;
"use client"
import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'CODER..',
        1300, // wait 1s before replacing "Mice" with "Hamsters"
        '',
        1300,
        'FRONT END..',
        1000,
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
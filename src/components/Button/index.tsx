import React, { ButtonHTMLAttributes } from 'react';

import { ElementStyle } from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <ElementStyle type="button" {...rest}>
    {children}
  </ElementStyle>
);

export default Button;

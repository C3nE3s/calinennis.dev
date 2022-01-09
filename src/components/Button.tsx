import React from 'react';

interface ButtonProps {
  color: 'brand' | 'accent' | 'neutral';
  onClick: () => void;
}
interface LinkProps {
  color: 'brand' | 'accent' | 'neutral';
  to: string;
}

const BaseButton: React.FC = ({ children }) => (
  <button className="font-sans font-thin tracking-wider border border-neutral-1 whitespace-nowrap">
    {children}
  </button>
);

const OutlineButton: React.FC = ({ props, children }) => (
  <BaseButton className="">{children}</BaseButton>
);

const SolidButton: React.FC = ({ props, children }) => (
  <BaseButton className="">{children}</BaseButton>
);

export const Button: React.FC<ButtonProps | LinkProps> = () => {};

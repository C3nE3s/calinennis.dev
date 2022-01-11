import React from 'react';

type ColorPallet = 'brand' | 'accent' | 'neutral';
type ButtonStyle = 'outline' | 'solid';

interface Props {
  color: ColorPallet;
  appearance: ButtonStyle;
}

type ButtonOrLink =
  | { to: string; onClick: never }
  | { onClick: () => void; to: never };

const baseButtonStyle = `appearance-none cursor-pointer font-sans leading-none inline-flex items-center justify-center overflow-hidden select-none whitespace-no-wrap touch-manipulation w-auto`;

const baseSolidStyle = `${baseButtonStyle} font-thin tracking-wider py-4 px-6 no-underline shadow-md focus:shadow-sm hover:shadow-lg transition-shadow will-change-auto  hover:transform hover:-translate-y-2 active:transform active:translate-y-2`;
const baseOutlineStyle = `${baseButtonStyle} font-thin tracking-wider py-4 px-6 no-underline`;

const generateButtonStyle = (pallette: ColorPallet, style: ButtonStyle) => {
  return style === 'solid'
    ? `bg-${pallette}-9 hover:bg-${pallette}-10 shadow-${pallette}-9/50 text-neutral-1 dark:bg-${pallette}-4 dark:hover:bg-${pallette}-5 dark:shadow-${pallette}-4/50 dark:text-neutral-12 ${baseSolidStyle}`
    : `${baseOutlineStyle} bg-transparent border border-${pallette}-7`;
};

export const Button: React.FC<Props & ButtonOrLink> = ({
  children,
  color,
  appearance,
  to,
  onClick,
  ...props
}) => {
  const computedStyles = generateButtonStyle(color, appearance);
  return onClick ? (
    <button className={computedStyles} onClick={onClick} {...props}>
      {children}
    </button>
  ) : (
    <a href={to} className={computedStyles} {...props}>
      {children}
    </a>
  );
};

//bg-transparent dark:bg-transparent hover:bg-${pallette}-9  dark:hover:bg-${pallette}-1 border border-${pallette}-7 hover:border-${pallette}-8 hover:bg-${pallette}-9 hover:text-${pallette}-1 hover:font-normal dark:border-${pallette}-5 dark:hover:border-${pallette}-6 dark:hover:text-${pallette}-12

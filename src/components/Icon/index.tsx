import React from 'react';

interface Props {
  type: 'menu' | 'close' | 'sun' | 'moon';
}

export const Icon: React.FC<Props> = ({ type }) => {
  switch (type) {
    case 'menu':
      return (
        <svg width="1em" height="1em" viewBox="0 0 15 15">
          <g fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12zM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5z"
              fill="currentColor"></path>
          </g>
        </svg>
      );
    case 'close':
      return (
        <svg width="1em" height="1em" viewBox="0 0 15 15">
          <g fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.854 2.854a.5.5 0 0 0-.708-.708L7.5 6.793L2.854 2.146a.5.5 0 1 0-.708.708L6.793 7.5l-4.647 4.646a.5.5 0 0 0 .708.708L7.5 8.207l4.646 4.647a.5.5 0 0 0 .708-.708L8.207 7.5l4.647-4.646z"
              fill="currentColor"></path>
          </g>
        </svg>
      );
    case 'sun':
      return (
        <svg width="1em" height="1em" viewBox="0 0 15 15">
          <g fill="none">
            <path
              d="M7.5 1.5v-1m0 13.99v-.998m6-5.997h1m-13 0h-1m2-4.996l-1-1m12 0l-1 1m-10 9.993l-1 1m12 0l-1-1m-2-4.997a2.999 2.999 0 0 1-3 2.998a2.999 2.999 0 1 1 3-2.998z"
              stroke="currentColor"
              strokeLinecap="square"></path>
          </g>
        </svg>
      );
    case 'moon':
      return (
        <svg width="1em" height="1em" viewBox="0 0 15 15">
          <g fill="none">
            <path
              d="M1.66 11.362A6.5 6.5 0 0 0 7.693.502a7 7 0 1 1-6.031 10.86z"
              stroke="currentColor"
              strokeLinejoin="round"></path>
          </g>
        </svg>
      );
  }
};

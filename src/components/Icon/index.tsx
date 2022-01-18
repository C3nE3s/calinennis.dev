import React from 'react';

interface Props {
  type:
    | 'menu'
    | 'close'
    | 'sun'
    | 'moon'
    | 'twitter'
    | 'discord'
    | 'linkedin'
    | 'github'
    | 'email'
    | 'document';
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
              fill="currentColor"
            ></path>
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
              fill="currentColor"
            ></path>
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
              strokeLinecap="square"
            ></path>
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
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case 'twitter':
      return (
        <svg width="1em" height="1em" viewBox="0 0 15 15">
          <g fill="none">
            <path
              d="M14.478 1.5l.5-.033a.5.5 0 0 0-.871-.301l.371.334zm-.498 2.959a.5.5 0 1 0-1 0h1zm-6.49.082h-.5h.5zm0 .959h.5h-.5zm-6.99 7V12a.5.5 0 0 0-.278.916L.5 12.5zm.998-11l.469-.175a.5.5 0 0 0-.916-.048l.447.223zm3.994 9l.354.353a.5.5 0 0 0-.195-.827l-.159.474zm7.224-8.027l-.37.336l.18.199l.265-.04l-.075-.495zm1.264-.94c.051.778.003 1.25-.123 1.606c-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388c.193-.546.232-1.178.177-2.006l-.998.066zm0 3.654V4.46h-1v.728h1zm-6.99-.646V5.5h1v-.959h-1zm0 .959V6h1v-.5h-1zM10.525 1a3.539 3.539 0 0 0-3.537 3.541h1A2.539 2.539 0 0 1 10.526 2V1zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1zM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29c-.612-1.393-.523-3.11.427-5.013l-.895-.446zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706zm7.949-8.009A3.445 3.445 0 0 0 10.526 1v1c.721 0 1.37.311 1.82.809l.74-.671zm-.296.83a3.513 3.513 0 0 0 2.06-1.134l-.744-.668a2.514 2.514 0 0 1-1.466.813l.15.989zM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
      );
    case 'discord':
      return (
        <svg width="1em" height="1em" viewBox="0 0 15 15">
          <g fill="none">
            <path
              d="M11.5 13.5l-.326.379a.5.5 0 0 0 .342.12L11.5 13.5zm-1.066-1.712a.5.5 0 0 0-.785.62l.785-.62zm.398-.41l-.174-.468a.672.672 0 0 0-.02.007l.194.461zm-1.738.516L9.01 11.4l-.008.001l.092.492zm-3.104-.012l-.095.49l.003.001l.092-.491zm-1.762-.515l-.182.465l.182-.466zm-.875-.408l-.278.415a.46.46 0 0 0 .033.021l.245-.436zm-.108-.06l.277-.416a.491.491 0 0 0-.054-.031l-.223.447zm-.048-.036l.353-.354a.502.502 0 0 0-.11-.083l-.243.437zm2.154 1.52a.5.5 0 0 0-.785-.62l.785.62zM3.5 13.5l-.016.5a.5.5 0 0 0 .347-.125L3.5 13.5zm-3-2.253H0a.5.5 0 0 0 .006.08l.494-.08zm1.726-8.488l-.3-.4a.5.5 0 0 0-.168.225l.468.175zM5.594 1.5l.498-.047A.5.5 0 0 0 5.605 1l-.01.5zm-.378 1.306a.5.5 0 0 0 .996-.095l-.996.095zm3.526-.063a.5.5 0 0 0 .992.127l-.992-.127zM9.406 1.5L9.395 1a.5.5 0 0 0-.485.436l.496.064zm3.368 1.259l.468-.175a.5.5 0 0 0-.168-.225l-.3.4zm1.726 8.488l.494.08a.497.497 0 0 0 .006-.08h-.5zM6.481 8.8l-.5-.008v.008h.5zM11.5 13.5l.326-.379l-.002-.002a.794.794 0 0 1-.044-.038a21.355 21.355 0 0 1-.536-.48c-.325-.298-.66-.622-.81-.813l-.785.62c.208.264.603.64.918.93a29.109 29.109 0 0 0 .593.53l.01.008l.003.002l.327-.378zm.436-3.246c-.46.303-.894.513-1.278.656l.348.937a7.352 7.352 0 0 0 1.48-.758l-.55-.835zm-1.297.663a7.387 7.387 0 0 1-1.629.484l.168.986a8.39 8.39 0 0 0 1.848-.548l-.387-.922zm-1.637.485a7.895 7.895 0 0 1-2.92-.012l-.184.983a8.896 8.896 0 0 0 3.288.012l-.184-.983zm-2.917-.011a9.57 9.57 0 0 1-1.675-.49l-.364.931c.512.2 1.13.402 1.849.54l.19-.981zm-1.675-.49a6.536 6.536 0 0 1-.813-.378l-.489.872c.326.183.648.324.938.437l.364-.931zm-.78-.358c-.047-.032-.093-.054-.108-.061c-.02-.01-.011-.007 0 .001l-.555.832c.048.032.093.054.108.061c.021.01.012.007 0-.002l.556-.83zm-.162-.091c.02.01.04.022.06.038c.017.014.03.026.022.02l-.707.707c.023.023.081.08.178.13l.447-.895zm-.028-.026a4.697 4.697 0 0 1-.28-.168l-.011-.008a.025.025 0 0 0-.001 0l-.287.41l-.286.409l.001.001l.002.002l.007.004l.021.014l.075.049c.064.04.156.096.273.161l.486-.874zm1.126 1.338c-.152.193-.489.525-.813.829a30.38 30.38 0 0 1-.538.491l-.034.031l-.01.008l-.001.002h-.001l.331.375l.331.375l.001-.001l.003-.002l.01-.009l.036-.032a38.039 38.039 0 0 0 .555-.508c.315-.296.708-.677.915-.94l-.785-.62zM3.516 13c-1.166-.037-1.778-.521-2.11-.96a2.394 2.394 0 0 1-.4-.82a1.1 1.1 0 0 1-.013-.056v.002l-.493.08c-.494.08-.494.08-.493.081v.006a1.367 1.367 0 0 0 .028.127a3.394 3.394 0 0 0 .573 1.183c.505.667 1.393 1.31 2.876 1.357l.032-1zM1 11.247c0-1.867.42-3.94.847-5.564a35.45 35.45 0 0 1 .776-2.552a16.43 16.43 0 0 1 .067-.186l.004-.01v-.001l-.468-.175l-.469-.175v.001l-.001.003l-.004.011a9.393 9.393 0 0 0-.072.2a36.445 36.445 0 0 0-.8 2.629C.443 7.083 0 9.253 0 11.247h1zm1.526-8.088c.8-.6 1.577-.89 2.15-1.03a4.764 4.764 0 0 1 .86-.128A1.48 1.48 0 0 1 5.585 2h-.001l.01-.5l.01-.5H5.6a.848.848 0 0 0-.028 0L5.504 1a3.973 3.973 0 0 0-.24.016a5.763 5.763 0 0 0-.825.141a6.938 6.938 0 0 0-2.513 1.2l.6.8zm2.57-1.612l.12 1.259l.996-.095l-.12-1.258l-.996.094zM9.734 2.87l.168-1.306l-.992-.128l-.168 1.307l.992.127zM9.406 1.5l.01.5h-.001a.497.497 0 0 1 .049 0c.038.002.1.005.179.013c.16.014.394.047.681.117c.573.14 1.35.429 2.15 1.029l.6-.8a6.937 6.937 0 0 0-2.513-1.2a5.76 5.76 0 0 0-.825-.142A3.98 3.98 0 0 0 9.399 1h-.002h-.001l.01.5zm3.368 1.259l-.469.174l.001.003l.004.009l.013.037l.053.149a35.482 35.482 0 0 1 .777 2.552c.428 1.624.847 3.697.847 5.564h1c0-1.994-.444-4.164-.88-5.819a36.512 36.512 0 0 0-.8-2.629a15.246 15.246 0 0 0-.057-.158l-.015-.042l-.004-.01l-.001-.004l-.47.174zm1.726 8.488l-.493-.08v-.001v-.001v-.001l-.002.008l-.01.047c-.012.045-.03.113-.061.197c-.062.17-.167.396-.34.624c-.332.439-.944.923-2.11.96l.032 1c1.483-.047 2.37-.69 2.876-1.356a3.395 3.395 0 0 0 .573-1.184a2.05 2.05 0 0 0 .026-.118l.002-.01v-.003v-.001c0-.001 0-.002-.493-.081zM5.259 6.97c-1.002 0-1.723.867-1.723 1.83h1c0-.498.357-.83.723-.83v-1zM3.536 8.8c0 .967.736 1.83 1.723 1.83v-1c-.357 0-.723-.334-.723-.83h-1zm1.723 1.83c1 0 1.722-.866 1.722-1.83h-1c0 .5-.357.83-.722.83v1zM6.98 8.81c.016-.978-.728-1.84-1.722-1.84v1.001c.372 0 .73.338.722.822l1 .017zm2.653-1.84c-1.002.001-1.723.868-1.723 1.831h1c0-.498.357-.83.723-.83v-1zM7.91 8.802c0 .967.736 1.83 1.723 1.83v-1c-.357 0-.723-.334-.723-.83h-1zm1.723 1.83c1 0 1.722-.866 1.722-1.83h-1c0 .5-.357.83-.722.83v1zm1.722-1.83c0-.963-.721-1.83-1.722-1.83v1c.365 0 .722.332.722.83h1zM3.74 4.44c1.443-.787 2.619-1.154 3.763-1.155c1.145 0 2.318.365 3.758 1.154l.48-.876c-1.522-.835-2.865-1.279-4.238-1.278c-1.373 0-2.717.445-4.241 1.277l.478.878z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
      );
    case 'linkedin':
      return (
        <svg width="1em" height="1em" viewBox="0 0 1200 1200">
          <path
            d="M0 0v1200h1200V0H0zm294.287 235.913c47.53.535 94.35 33.325 96.387 90.088c1.016 50.475-42.971 88.921-97.632 90.088h-1.318c-47.057-.543-93.012-34.156-95.142-90.088c.671-49.913 42.627-88.904 97.705-90.088zM804.199 474.39c52.255.324 101.572 15.826 142.09 57.13c42.106 46.96 55.624 111.71 57.129 177.538v299.414H830.859V729.419c-.384-52.302-18.3-115.877-87.524-117.993c-40.571.432-69.18 24.007-88.77 63.428c-5.348 12.688-6.118 27.273-6.372 41.821v291.797H475.708c.66-145.877 1.567-291.743 1.245-437.622c0-41.438-.399-69.34-1.245-83.716h172.485v73.535c14.641-20.823 30.879-40.571 52.66-56.47c29.545-21.085 65.036-29.168 103.346-29.809zm-597.436 12.744h172.485v521.338H206.763V487.134z"
            fill="currentColor"
          ></path>
        </svg>
      );
    case 'github':
      return (
        <svg width="0.95em" height="1em" viewBox="0 0 760 800">
          <path
            d="M510 383q23 0 39 21t15 53t-15 52t-39 22t-38-22t-16-52t16-53t38-21zm186-193q29 31 46 69t16 90q0 74-18 125t-48 84t-64 52t-70 28t-64 10l-44 2H308q-15 0-44-2t-63-10t-70-28t-65-52t-47-84T0 349q0-51 17-90t45-69q-3-6-3-24t1-42t9-56T88 8q22 3 51 14q25 9 59 25t77 46q18-5 46-8t58-2l58 2q28 1 46 8q42-29 77-46t59-25q29-11 51-14q12 30 19 60t9 56t2 42t-4 24zM380 614q58 0 109-6t88-23t59-51t21-90q0-27-10-52t-33-45q-19-18-44-24t-56-5t-64 4t-70 3h-2q-36 0-70-3t-64-4t-55 5t-44 24q-23 20-33 45t-11 52q0 57 22 90t58 51t88 23t109 6h2zM248 383q23 0 39 21t15 53t-15 52t-39 22t-38-22t-16-52t16-53t38-21z"
            fill="currentColor"
          ></path>
        </svg>
      );
    case 'email':
      return (
        <svg width="1em" height="1em" viewBox="0 0 36 36">
          <path
            d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-1.54 22H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0L32 9.21v17.5l-7.36-7.36l-1.41 1.41zM5.31 8h25.07L17.84 20.47z"
            fill="currentColor"
          ></path>
        </svg>
      );
    case 'document':
      return (
        <svg width="1em" height="1em" viewBox="0 0 21 21">
          <g
            fill="none"
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16.5 15.5v-10a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z"></path>
            <path d="M7.5 8.5h5"></path>
            <path d="M7.5 10.5h6"></path>
            <path d="M7.5 12.5h3"></path>
          </g>
        </svg>
      );
  }
};

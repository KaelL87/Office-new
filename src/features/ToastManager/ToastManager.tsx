import React from 'react';

import { cssTransition, ToastContainer } from 'react-toastify';
import 'animate.css/animate.min.css';
import 'react-toastify/dist/ReactToastify.css';

const bounce = cssTransition({
  enter: 'animate__animated animate__fadeInRight',
  exit: 'animate__animated animate__fadeOutRight',
});
const ToastManager: React.FC = () => (
  <div data-testid="ToastManager" style={{ zIndex: 9999 }}>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover
      theme="light"
      transition={bounce}
    />
  </div>
);

export default ToastManager;

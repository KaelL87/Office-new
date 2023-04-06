/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { toast } from 'react-toastify';

export function callErrorToast(message: string | null) {
  if (message) {
    toast.error(message, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
}

export function callSuccessToast(message: string | null) {
  if (message) {
    toast.success(message, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
    });
  }
}

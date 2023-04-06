/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import Modal from '@/components/Modal/Modal';
import { useAppSelector } from '@/helpers/ndex';
import { stateModal } from '@/store/slices/modalSlice';

const ModalContainer: React.FC = () => {
  const modalState = useAppSelector(stateModal);
  return <>{modalState?.modals.length > 0 ? <Modal /> : null}</>;
};

export default ModalContainer;

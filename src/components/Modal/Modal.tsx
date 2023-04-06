import React from 'react';

import { dynamic } from '@/helpers/makeLazy';
import { useAppSelector } from '@/helpers/ndex';
import useDidMountEffect from '@/hooks/useDidMountEffect';
import { useModalBetter } from '@/hooks/useModal';
import useSafeState from '@/hooks/useSafeState';
import { stateModal } from '@/store/slices/modalSlice';

export type ModalId = 'Login' | 'Register' | 'Forgot';

const componentRecord: Record<ModalId, (props?: Record<string, unknown>) => JSX.Element> = {
  Login: dynamic(() => import('@/features/core/components/login')),
  Register: dynamic(() => import('@/features/core/components/register')),
  Forgot: dynamic(() => import('@/features/core/components/forgot')),
};

const Modal: React.FC = () => {
  const modalState = useAppSelector(stateModal);
  const [close, setClose] = useSafeState(false);
  const [close1, setClose1] = useSafeState(false);
  const onCloseModal = () => {
    setClose(true);
  };
  useDidMountEffect(() => {
    if (close) {
      // setClose(false);
      setClose1(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [close]);
  useDidMountEffect(() => {
    if (close1) {
      setClose1(false);
      setTimeout(() => {
        onClose();
        setClose(false);
      }, 450);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [close1]);
  const { onClose } = useModalBetter();
  return (
    <div className="Modal">
      <div role="button" className="back_drop_modal" onClick={() => onCloseModal()} />
      {modalState?.modals.map(({ name }, index) => {
        const Component = componentRecord[name];
        return (
          !!Component && (
            <div className="Modal_wrapper" key={index}>
              <div className={close ? 'Modal_content' : 'Modal_content active_modal'} key={index}>
                <Component key={index} />;
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};
export default Modal;

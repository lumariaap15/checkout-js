import React, { FunctionComponent, useCallback } from 'react';

//TODO: check use on OrderSummaryDrawer
//import { TranslatedString } from '@bigcommerce/checkout/locale';

import { ButtonVariant } from '@bigcommerce/checkout/ui';

import { Button } from '../ui/button';
import { Modal, ModalTrigger } from '../ui/modal';



export interface KiwiPaymentModalProps {
  isOpen: boolean;
  onRequestClose?(): void;
  onAfterOpen?(): void;
}

const KiwiPaymentModal: FunctionComponent<KiwiPaymentModalProps> = ({
  onRequestClose,
  onAfterOpen,
  isOpen,
}) => {
  return (
    <Modal isOpen={isOpen} onAfterOpen={onAfterOpen} onRequestClose={onRequestClose}>
      <iframe height="315" src="https://www.google.com/webhp?igu=1" title="Google" width="560" />
    </Modal>
  );
};

const CheckoutKiwi = () => {
  const renderModal = useCallback(
    (props) => (
      <KiwiPaymentModal
        {...props}
      />
    ),
    [],
  );

  return (
    <ModalTrigger modal={renderModal}>
      {({ onClick }) => (
        <Button onClick={onClick} variant={ButtonVariant.Primary}>
          Pay with Kiwi
        </Button>
      )}
    </ModalTrigger>
  );
};

export default CheckoutKiwi;

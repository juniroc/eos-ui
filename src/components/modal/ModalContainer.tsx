import React, { PropsWithChildren } from 'react';

function ModalContainer({
  isOpen,
  children,
}: PropsWithChildren<{ isOpen: boolean }>) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
      {children}
    </div>
  );
}

export default ModalContainer;

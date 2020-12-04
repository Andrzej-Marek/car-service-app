import React, { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

interface OwnProps {
  isOpen: boolean;
  withBackground?: boolean;
  position?: "top" | "center";
}

type Props = OwnProps;

const modalRoot = document.getElementById("modal-root");

const Modal: FC<Props> = ({
  isOpen,
  withBackground = true,
  position = "top",
  children,
}) => {
  const el = document.createElement("div");

  useEffect(() => {
    if (!modalRoot) {
      return;
    }
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  if (!isOpen) {
    return null;
  }

  const topOffsetConfig = {
    top: "100px",
    center: "50%",
  };
  return createPortal(
    <ModalWrapper
      onClick={() => console.log(123)}
      withBackground={withBackground}
    >
      <ModalContentWrapper topOffset={topOffsetConfig[position]}>
        {children}
      </ModalContentWrapper>
    </ModalWrapper>,
    el
  );
};

interface ModalWrapperProps {
  withBackground: boolean;
}
const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background: ${({ theme, withBackground }) =>
    withBackground && theme.color.modalBackground};
  z-index: 999;
  overflow-y: hidden;
`;

interface ModalContentWrapper {
  topOffset: string;
}
const ModalContentWrapper = styled.div<ModalContentWrapper>`
  position: relative;
  background: ${({ theme }) => theme.color.white};
  text-align: center;
  width: 90vw;
  margin: 0 auto;
  max-width: 550px;
  padding: 10px;
  top: ${({ topOffset }) => topOffset && topOffset};
  border-radius: ${({ theme }) => theme.radius.normal};
}
`;

export default Modal;

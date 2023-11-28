import React from "react";
import { Button, ButtonProps, Popconfirm, PopconfirmProps } from "antd";

type ButtonWithPopconfirmProps = {
  popconfirmProps: PopconfirmProps;
  buttonProps: ButtonProps;
  buttonLabel?: string;
  buttonWrapper?: React.FC<{ children: React.ReactNode }>;
};

const ButtonWithPopconfirm: React.FC<ButtonWithPopconfirmProps> = (Props) => {
  const {
    popconfirmProps,
    buttonProps,
    buttonLabel,
    buttonWrapper: ButtonWrapper,
  } = Props;
  return (
    <Popconfirm {...popconfirmProps}>
      {ButtonWrapper ? (
        <ButtonWrapper>
          <Button {...buttonProps}>{buttonLabel}</Button>
        </ButtonWrapper>
      ) : (
        <Button {...buttonProps}>{buttonLabel}</Button>
      )}
    </Popconfirm>
  );
};

export default ButtonWithPopconfirm;

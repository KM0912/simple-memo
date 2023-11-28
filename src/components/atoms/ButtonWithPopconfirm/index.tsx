import React from "react";
import { Button, ButtonProps, Popconfirm, PopconfirmProps } from "antd";

type ButtonWithPopconfirmProps = {
  popconfirmProps: PopconfirmProps;
  buttonProps: ButtonProps;
  buttonLabel?: string;
  wrapper?: React.FC<{ children: React.ReactNode }>;
};

const ButtonWithPopconfirm: React.FC<ButtonWithPopconfirmProps> = (Props) => {
  const { popconfirmProps, buttonProps, buttonLabel, wrapper: Wrapper } = Props;

  return (
    <>
      {Wrapper ? (
        <Wrapper>
          <Popconfirm {...popconfirmProps}>
            <Button {...buttonProps}>{buttonLabel}</Button>
          </Popconfirm>
        </Wrapper>
      ) : (
        <Popconfirm {...popconfirmProps}>
          <Button {...buttonProps}>{buttonLabel}</Button>
        </Popconfirm>
      )}
    </>
  );
};

export default ButtonWithPopconfirm;

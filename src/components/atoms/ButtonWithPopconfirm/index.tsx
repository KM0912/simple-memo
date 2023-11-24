import React from "react";
import { Button, ButtonProps, Popconfirm, PopconfirmProps } from "antd";

type ButtonWithPopconfirmProps = {
  popconfirmProps: PopconfirmProps;
  buttonProps: ButtonProps;
  buttonLabel: string;
};

const ButtonWithPopconfirm: React.FC<ButtonWithPopconfirmProps> = (Props) => {
  const { popconfirmProps, buttonProps, buttonLabel } = Props;
  return (
    <Popconfirm {...popconfirmProps}>
      <Button {...buttonProps}>{buttonLabel}</Button>
    </Popconfirm>
  );
};

export default ButtonWithPopconfirm;

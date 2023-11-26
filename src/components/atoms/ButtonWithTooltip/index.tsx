import React from "react";
import { Button, ButtonProps, Tooltip, TooltipProps } from "antd";

type ButtonWithTooltipProps = {
  buttonProps: ButtonProps;
  tooltipProps: TooltipProps;
  buttonLabel?: string;
};

const ButtonWithTooltip: React.FC<ButtonWithTooltipProps> = (props) => {
  const { buttonProps, tooltipProps, buttonLabel } = props;
  return (
    <Tooltip {...tooltipProps}>
      <Button {...buttonProps}>{buttonLabel}</Button>
    </Tooltip>
  );
};

export default ButtonWithTooltip;

import React from "react";
import { Button, ButtonProps, Tooltip, TooltipProps } from "antd";

type ButtonWithTooltipProps = {
  buttonProps: ButtonProps;
  tooltipProps: TooltipProps;
  buttonLabel?: string;
  buttonWrapper?: React.FC<{ children: React.ReactNode }>;
};

const ButtonWithTooltip: React.FC<ButtonWithTooltipProps> = (props) => {
  const {
    buttonProps,
    tooltipProps,
    buttonLabel,
    buttonWrapper: ButtonWrapper,
  } = props;
  return (
    <Tooltip {...tooltipProps}>
      {ButtonWrapper ? (
        <ButtonWrapper>
          <Button {...buttonProps}>{buttonLabel}</Button>
        </ButtonWrapper>
      ) : (
        <Button {...buttonProps}>{buttonLabel}</Button>
      )}
    </Tooltip>
  );
};

export default ButtonWithTooltip;

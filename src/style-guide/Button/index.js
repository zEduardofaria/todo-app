import React from 'react'
import {
  string,
  number,
  bool,
  func,
  oneOf,
  oneOfType,
  object,
} from 'prop-types'

import { StyledButton, Label } from './styles'

const Button = ({
  label,
  disabled,
  onClick,
  className,
  style,
  type = 'default',
  width,
  height = 54,
}) => (
  <StyledButton
    className={className}
    style={style}
    onClick={onClick}
    type={type}
    disabled={disabled}
    width={width}
    height={height}
  >
    {label && <Label>{label}</Label>}
  </StyledButton>
)

Button.propTypes = {
  label: oneOfType([string, object]),
  disabled: bool,
  className: string,
  type: oneOf(['default', 'primary', 'text', 'danger', 'success']),
  width: oneOfType([number, string]),
  height: number,
  onClick: func,
  style: object,
}

export default Button

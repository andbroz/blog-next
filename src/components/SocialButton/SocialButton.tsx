import { SocialIcon } from '@components/Icons';
import { SocialType } from '@config';
import { Button } from 'antd';
import React, { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLButtonElement> {
  type: SocialType;
  url: string;
  color?: string;
  className?: string;
}

const SocialButton = ({
  type,
  url,
  color,
  className = '',
}: Props): JSX.Element => (
  <Button
    className={`text-center text-light rounded-none ${className}`}
    role="link"
    size="large"
    type="link"
    href={`${url}`}
    icon={SocialIcon(type)}
    style={{ backgroundColor: color ? color : '' }}
  />
);

export default SocialButton;

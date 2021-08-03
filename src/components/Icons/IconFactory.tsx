import React from 'react';
import Icon from '@ant-design/icons';

interface Props {
  className?: string;
}

type IconType = (props: Props) => JSX.Element;

const IconFactory = (
  svg: React.ComponentType<React.SVGProps<SVGSVGElement>>
): IconType => {
  const IconComponent = ({ className }: Props): JSX.Element => (
    <Icon component={svg} className={className} />
  );
  return IconComponent;
};

export default IconFactory;
import { cx } from '@components/utils';
import type { ReactNode } from 'react';
import Heading from './Heading';
import styles from './Headings.module.css';

interface Props {
  className?: string;
  children?: ReactNode;
}

const H4 = ({ className, ...props }: Props): JSX.Element => (
  <Heading {...props} level={4} className={cx(className, styles.h4)} />
);

export default H4;

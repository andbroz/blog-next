import Link from '@components/Link';
import { Bounce } from '@components/Motion';
import Tooltip from '@components/Tooltip';
import type { ReactNode } from 'react';
import styles from './LandingNavLink.module.css';

interface Props {
  title: string;
  href: string;
  children: ReactNode;
}

const LandingNavLink = ({ title, href, children }: Props): JSX.Element => (
  <Tooltip className={styles.tooltip} placement="left" title={title}>
    <Bounce>
      <span className={styles.link} role="link">
        <Link href={href}>{children}</Link>
      </span>
    </Bounce>
  </Tooltip>
);

export default LandingNavLink;

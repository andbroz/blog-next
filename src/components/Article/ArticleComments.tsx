import React from 'react';
import { useDisqus } from '@hooks';
import * as styles from './ArticleComments.module.css';

interface Props {
  url: string;
}

const ArticleComments = ({ url }: Props): JSX.Element => {
  useDisqus(url);

  return <div id="disqus_thread" className={styles.disqus} />;
};

export default ArticleComments;

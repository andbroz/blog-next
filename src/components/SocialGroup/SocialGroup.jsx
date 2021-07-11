import React, { useState, useEffect } from 'react';
import SocialShareButton from './SocialShareButton';
import * as styles from './SocialGroup.module.css';

const SocialGroup = () => {
  const [url, setUrl] = useState('');
  const currentUrl = document.location.href;

  useEffect(() => setUrl(currentUrl), []);

  return (
    <div
      style={{
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        top: '50%',
        left: 0,
      }}
      className={styles.socialGroup}
    >
      <SocialShareButton
        color="red"
        type="weibo"
        url={`https://service.weibo.com/share/share.php?url=${url}`}
      />
      <SocialShareButton
        color="facebook"
        type="facebook"
        url={`https://www.facebook.com/sharer.php?u=${url}`}
      />
      <SocialShareButton
        color="twitter"
        type="twitter"
        url={`https://twitter.com/intent/tweet?url=${url}`}
      />
      <SocialShareButton
        color="linkedin"
        type="linkedin"
        url={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
      />
    </div>
  );
};

export default SocialGroup;

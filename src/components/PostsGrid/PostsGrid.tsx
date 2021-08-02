import React from 'react';
import { usePostsMetadata } from '@hooks';
import MobilePostsGrid from './MobilePostsGrid';
import DesktopPostsGrid from './DesktopPostsGrid';

const PostsGrid = () => {
  const { posts } = usePostsMetadata();

  return (
    <>
      <MobilePostsGrid posts={posts} />
      <DesktopPostsGrid posts={posts} />
    </>
  );
};

export default PostsGrid;
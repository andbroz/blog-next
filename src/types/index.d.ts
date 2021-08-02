import { SocialType } from '@config';

export interface Book {
  title: string;
  author: string;
  url: string;
  description: string;
}

export interface SiteMetadata {
  title: string;
  author: string;
  siteUrl: string;
  email: string;
  disqusUrl: string;
  landingTitles: string[];
  socialList: {
    [key in SocialType]: string;
  };
  bookList: Book[];
}

export declare type TagType = string;

interface PostMetaType {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  tags: string[];
  timeToRead: string;
  prevPost: string;
  nextPost: string;
}

interface PostContentType {
  excerpt: string;
  toc: string;
  html: string;
}

export declare type PostType = PostMetaType & Partial<PostContentType>;

interface Profile {
  username: string;
  avatar: string;
  bio: string;
  location: string;
  url: string;
  followers: number;
  followersUrl: string;
  following: number;
  followingUrl: string;
  createDate: string;
}

interface Repo {
  name: string;
  stars: number;
  language: string;
  repoUrl: string;
}

export interface GitHubType {
  profile: Profile;
  repos: Repo[];
}
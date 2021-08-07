import { BranchesOutlined, StarOutlined } from '@ant-design/icons';
import { getColorByName } from '@config';
import { Repo } from '@types';
import { Badge, Card } from 'antd';
import React from 'react';

interface Props {
  repo: Repo;
}

const GithubRepoCard = ({ repo }: Props): JSX.Element => (
  <Badge.Ribbon text={repo.name} color={getColorByName(repo.name)}>
    <Card
      className="mt-8"
      hoverable
      title={
        <a href={repo.repoUrl}>
          <BranchesOutlined className="text-4xl align-top" />
          <span className="text-span-lg">{repo.name}</span>
        </a>
      }
    >
      <Card.Meta title={<span className="text-span">{repo.language}</span>} />
      <StarOutlined className="text-2xl align-top" />
      <span className="text-span">{repo.stars}</span>
    </Card>
  </Badge.Ribbon>
);

export default GithubRepoCard;

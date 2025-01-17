import Badge from '@components/Badge';
import { Card, Meta } from '@components/Card';
import { Branches, Star } from '@components/Icons';
import { Tag } from '@components/Tags';
import { Span } from '@components/Texts';
import { getColorByName } from '@config';
import type { Repo } from '@types';

interface Props {
  repo: Repo;
}

const GithubRepoCard = ({ repo }: Props): JSX.Element => (
  <Badge.Ribbon text={repo.name} color={getColorByName(repo.name)}>
    <Card
      className="mt-8"
      title={
        <a href={repo.repoUrl}>
          <Branches className="align-top text-4xl" />
          <Span size="lg">{repo.name}</Span>
        </a>
      }
    >
      <Meta
        title={
          <Tag className="mb-3" color={getColorByName(repo.language)}>
            {repo.language}
          </Tag>
        }
      />
      <Star className="align-top text-2xl dark:text-light" />
      <Span className="dark:text-light">{repo.stars}</Span>
    </Card>
  </Badge.Ribbon>
);

export default GithubRepoCard;

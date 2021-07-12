import React from 'react';
import { Card, Image, Icon, Table, List } from 'semantic-ui-react';
import { useSiteMetadata } from '@/hooks';

const GithubCard = ({ githubProfile, githubRepos }) => {
  const { email } = useSiteMetadata();

  if (githubProfile && githubRepos) {
    return (
      <Card centered fluid>
        <Image centered size="medium" src={githubProfile.avatar} />
        <Card.Content>
          <Card.Header>
            <a href={githubProfile.url}>
              <Icon name="github" />
              {githubProfile.username}
            </a>
          </Card.Header>
          <Card.Meta>
            <span className="date">Joined in {githubProfile.createDate}</span>
          </Card.Meta>
          <br />
          <Card.Description>
            <List>
              <List.Item>
                <Icon name="info circle" />
                {githubProfile.bio || 'No Description'}
              </List.Item>
              <List.Item>
                <Icon name="marker" />
                {githubProfile.location || 'Earth'}
              </List.Item>
            </List>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={githubProfile.followersUrl}>
            <Icon name="user circle" />
            {githubProfile.followers} Followers
          </a>
          <br />
          <br />
          <a href={githubProfile.followingUrl}>
            <Icon name="user circle outline" />
            {githubProfile.following} Following
          </a>
          <Table celled padded>
            <Table.Body>
              {githubRepos.map((repo, index) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    <a href={repo.repoUrl}>{repo.name}</a>
                  </Table.Cell>
                  <Table.Cell>{repo.language}</Table.Cell>
                  <Table.Cell>
                    <Icon name="star" />
                    {repo.stars}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card.Content>
      </Card>
    );
  }

  return (
    <div
      style={{
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <h1>About me</h1>
      <p>
        Please mail to <a href={`mailto:${email}`}>me</a>.
      </p>
    </div>
  );
};

export default GithubCard;

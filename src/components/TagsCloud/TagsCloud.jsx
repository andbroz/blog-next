import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { Link } from 'gatsby';
import { Label, Divider, Container, Segment } from 'semantic-ui-react';

const TagsCloud = ({ tags }) => {
  const colors = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
  ];

  const getRandomColor = () => {
    const colorIdx = Math.floor(Math.random() * 11);
    return colors[colorIdx];
  };

  const tagsList = Object.keys(tags).sort((a, b) => {
    return tags[b] - tags[a];
  });

  return (
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Spring
        from={{ opacity: 0, transform: 'translateX(-200px)' }}
        to={{ opacity: 1, transform: 'translateX(0)' }}
      >
        {props => (
          <Container text style={{ ...props }} className="slideIn">
            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: '3em 0em' }}
            >
              Tags
            </Divider>

            <Label.Group tag>
              {tagsList.map(tag => {
                return (
                  <Label
                    key={tag}
                    color={getRandomColor()}
                    as={Link}
                    to={`/tags/${tag}`}
                  >
                    {tag} &nbsp;&nbsp; {tags[tag]}
                  </Label>
                );
              })}
            </Label.Group>
            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: '3em 0em' }}
            >
              Tags
            </Divider>
          </Container>
        )}
      </Spring>
    </Segment>
  );
};

export default TagsCloud;
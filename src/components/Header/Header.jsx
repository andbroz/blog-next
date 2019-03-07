import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import { Link } from 'gatsby';
import { Menu, Visibility, Container, Segment } from 'semantic-ui-react';

const Header = ({ menuFixed, onBottomPassed, onBottomPassedReverse }) => (
  <Visibility
    onBottomPassed={onBottomPassed}
    onBottomPassedReverse={onBottomPassedReverse}
    once={false}
  >
    <Segment inverted textAlign="center" vertical>
      <Menu
        className="blog-header"
        style={{ zIndex: 99999 }}
        fixed={menuFixed ? 'top' : null}
        inverted={!menuFixed}
        pointing={!menuFixed}
        secondary={!menuFixed}
        size="large"
      >
        <Spring
          from={{ opacity: 0, transform: 'translateX(200px)' }}
          to={{ opacity: 1, transform: 'translateX(0)' }}
        >
          {props => (
            <Container text style={{ ...props }}>
              <Menu.Item as={Link} to="/" activeClassName="active">
                Home
              </Menu.Item>
              <Menu.Item as={Link} to="/tags" activeClassName="active">
                Tags
              </Menu.Item>
              <Menu.Item as={Link} to="/books" activeClassName="active">
                Books
              </Menu.Item>
              <Menu.Item as={Link} to="/about" activeClassName="active">
                About
              </Menu.Item>
            </Container>
          )}
        </Spring>
      </Menu>
    </Segment>
  </Visibility>
);

class HeaderContainer extends Component {
  state = {
    menuFixed: false,
    sidebarVisible: false,
  };

  hideFixedMenu = () => this.setState({ menuFixed: false });

  showFixedMenu = () => this.setState({ menuFixed: true });

  render() {
    const { menuFixed } = this.state;

    return (
      <Header
        menuFixed={menuFixed}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
      />
    );
  }
}

export default HeaderContainer;
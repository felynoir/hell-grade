import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Container, Icon, Image, Menu, Sidebar } from 'semantic-ui-react';
import styled from 'styled-components';
import ResponsiveContainer from '../ResponsiveContainer';
import MenuItem from '../MenuItem';
import { Box } from 'rebass';

const NoneRadiusMenu = styled(Menu)`
  &,
  & > .item {
    border-radius: 0 !important;
  }
`;

const NavBarMobile = ({
  children,
  menus,
  onPusherClick,
  onToggle,
  visible,
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="push"
      direction="right"
      icon="labeled"
      inverted
      visible={visible}
      vertical
      width="wide"
    >
      <MenuItem items={menus} />
    </Sidebar>
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: '100vh' }}
    >
      <Menu fixed="top" inverted>
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { menus, children } = this.props;
    const { visible } = this.state;
    return (
      <Fragment>
        <ResponsiveContainer width={[1, 0, 0]}>
          <NavBarMobile
            onToggle={this.handleToggle}
            visible={visible}
            menus={menus}
            onPusherClick={this.handlePusher}
          >
            <Box mt={'5em'}>{children}</Box>
          </NavBarMobile>
        </ResponsiveContainer>
        <ResponsiveContainer width={[0, 1, 1]}>
          <NoneRadiusMenu inverted>
            <MenuItem items={menus} />
          </NoneRadiusMenu>
          <Box m={3}>{children}</Box>
        </ResponsiveContainer>
      </Fragment>
    );
  }
}

export default NavigationBar;

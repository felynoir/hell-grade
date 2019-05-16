import React, { Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

/**
 * Render Menu Item Semantic React UI
 * @param {Object} props
 * @param {String} props.colorSet - name of color's et default is colorsA
 * @param {Array<Object>} props.items - Menu items
 */
class MenuItem extends React.Component {
  state = {
    activeA: colorSets['colorsA'][0],
    activeB: colorSets['colorsB'][0],
  };

  handleAClick = (e, { color }) => this.setState({ activeA: color });

  handleBClick = (e, { color }) => this.setState({ activeB: color });

  render() {
    const {
      colorSet = 'colorsA',
      items,
      location: { pathname },
    } = this.props;
    const { activeA, activeB } = this.state;
    return (
      <Fragment>
        {items.map((item, index) => {
          return (
            <Menu.Item
              key={index}
              as={item.as || Link}
              to={item.to || pathname}
              name={item.name}
              color={colorSets[colorSet][index]}
              active={colorSets[colorSet][index] === activeA}
              onClick={this.handleAClick}
            />
          );
        })}
      </Fragment>
    );
  }
}

const colorSets = {
  colorsA: ['red', 'orange', 'yellow', 'olive', 'green', 'teal'],
  colorsB: ['blue', 'violet', 'purple', 'pink', 'brown', 'grey'],
};

export default withRouter(MenuItem);

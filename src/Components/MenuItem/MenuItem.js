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
  constructor(props) {
    super(props);
    const { colorSet = 'colorsA' } = this.props;
    console.log(colorSet);
    this.state = {
      active: colorSets[colorSet][0],
    };
  }

  handleClick = (e, { color }) => this.setState({ active: color });

  render() {
    const {
      colorSet = 'colorsA',
      items,
      location: { pathname },
    } = this.props;
    const { active } = this.state;
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
              active={colorSets[colorSet][index] === active}
              onClick={item.onClick || this.handleClick}
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

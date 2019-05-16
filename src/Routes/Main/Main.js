import React from 'react';
import Responsive from '../../Components/ResponsiveContainer';
import NavigationBar from '../../Components/NavigationBar';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const menus = [{ name: 'Home', to: '' }, { name: 'Users', to: '' }];

    return <NavigationBar menus={menus}>Kuy</NavigationBar>;
  }
}

export default Main;

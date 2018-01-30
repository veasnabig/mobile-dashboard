import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View,
  StatusBar
} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';
import { OffCanvasReveal } from 'react-native-off-canvas-menu';
import Drawer from './drawer/drawer.js';

// OffCanvas3D
import Menu1 from './menu/menu1';
import Menu2 from './menu/menu2';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  handleMenu() {
    const { menuOpen } = this.state
    this.setState({
      menuOpen: !menuOpen
    })
  }
  render() {
    const menus = [
      {
        title: 'Menu 1',
        icon: <Icon name="camera" size={35} color='#ffffff' />,
        renderScene: <Menu1 handleMenu={this.handleMenu.bind(this)} />
      },
      {
        title: 'Menu 2',
        icon: <Icon name="bell" size={35} color='#ffffff' />,
        renderScene: <Menu2 handleMenu={this.handleMenu.bind(this)} />
      },
      {
        title: 'Menu 3',
        icon: <Icon name="camera" size={35} color='#ffffff' />,
        // renderScene: <Menu1 handleMenu={this.handleMenu.bind(this)} />
      },
      {
        title: 'Menu 4',
        icon: <Icon name="bell" size={35} color='#ffffff' />,
        // renderScene: <Menu2 handleMenu={this.handleMenu.bind(this)} />
      },
      {
        title: 'Menu 5',
        icon: <Icon name="camera" size={35} color='#ffffff' />,
        // renderScene: <Menu1 handleMenu={this.handleMenu.bind(this)} />
      },
      {
        title: 'Menu 5',
        icon: <Icon name="camera" size={35} color='#ffffff' />,
        // renderScene: <Menu1 handleMenu={this.handleMenu.bind(this)} />
      },
      {
        title: 'Menu 5',
        icon: <Icon name="camera" size={35} color='#ffffff' />,
        // renderScene: <Menu1 handleMenu={this.handleMenu.bind(this)} />
      },
      
    ];
    const statusBar = this.state.menuOpen ?
      <StatusBar
        backgroundColor="#222222"
        animated={true}
      />
      : null

    return (
      <View style={{ flex: 1 }}>
        {statusBar}
        <Drawer
          active={this.state.menuOpen}
          onMenuPress={this.handleMenu.bind(this)}
          backgroundColor={'rgba(0,0,0,.5)'}
          menuTextStyles={{ color: 'white' }}
          handleBackPress={false}
          menuItems={menus}
        >
        </Drawer>
      </View>
    )
  }
}

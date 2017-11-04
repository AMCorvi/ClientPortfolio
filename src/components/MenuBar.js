import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import scale from "../utils/scale.js";

export default class MenuBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const styles = {
        menuContainer: {
            borderRadiusTop:"0px 0px 0px 0px"
						, marginTop: scale[3]
        }
    }

    return (
      <Menu style={styles.menuContainer} widths={3} size="massive" secondary stackable pointing>

        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='About'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>

        <Menu.Item
          name='Portfolio'
          active={activeItem === 'Portfolio'}
          onClick={this.handleItemClick}
        >
          Portfolio
        </Menu.Item>
      </Menu>
    )
  }
}

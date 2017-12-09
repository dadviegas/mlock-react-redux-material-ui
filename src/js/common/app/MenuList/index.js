import React, { PureComponent } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import { Tabs, Tab } from 'material-ui/Tabs'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List'

const ListItem = List.ListItem

import siteMap from '../../../../site/map'
class MenuListComponent extends PureComponent {
  constructor (props) {
    super(props)
    this.props = props
  }

  state = {
    isDrawerOpen: false
  }

  handleNestedListToggle = (item) => {
    this.setState({
      isDrawerOpen: !item.state.isDrawerOpen,
    })
  }

  onLinkClick = (item, hash) => {
    window.location.hash = `#${hash}`
  }

  componentWillReceiveProps(nextProps) {
    const { location, history: { action } } = nextProps;
    if (location !== this.props.location) {
      window.scrollTo(0, 0)
    }
  }

  buildItem = (items = [], route) => {
    const nested = []

    if (route.nested) {
      route.nested.map((route) => (
        this.buildItem(nested, route)
      ))
    }

    const it = <ListItem
      key={route.path}
      primaryText={route.name}
      onClick={(item) => this.onLinkClick(item, route.path)}
      nestedItems={nested}
      />

    items.push(it)
  }

  buildMenu = (siteMap) => {
    const items = []

    siteMap.map((route) => (
      this.buildItem(items, route)
    ))

    return items
  }

  render(props) {
    return <Drawer width={300} docked={false} className="app-drawer" open={this.props.open} onRequestChange={this.props.onRequestChange} >
      <List>
        {this.buildMenu(siteMap)}
      </List>
    </Drawer>
  }
}

export default withRouter(props => <MenuListComponent {...props} />)

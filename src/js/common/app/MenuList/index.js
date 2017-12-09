import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List'
import siteMap from '../../../../site/map'
const ListItem = List.ListItem

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
      isDrawerOpen: !item.state.isDrawerOpen
    })
  }

  onLinkClick = (item, hash) => {
    window.location.hash = `#${hash}`
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

  render (props) {
    return <Drawer width={300} docked={false} className='app-drawer' open={this.props.open} onRequestChange={this.props.onRequestChange} >
      <List>
        {this.buildMenu(siteMap)}
      </List>
    </Drawer>
  }
}

export default withRouter(props => <MenuListComponent {...props} />)

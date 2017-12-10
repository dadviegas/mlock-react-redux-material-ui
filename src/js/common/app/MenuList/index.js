import React, { PureComponent } from 'react'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText, ListSubheader } from 'material-ui/List'
import siteMap from '../../../../site/map'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
})

class MenuListComponent extends PureComponent {
  constructor (props) {
    super(props)
    this.props = props
  }

  state = {
    isDrawerOpen: false
  }

  onLinkClick = (item, hash) => {
    window.location.hash = `#${hash}`
    this.props.onRequestClose()
  }

  buildItem = (items = [], route, nested = false) => {
    const it = <ListItem button
      className={nested ? this.props.classes.nested : {}}
      key={route.path}
      onClick={(item) => this.onLinkClick(item, route.path)} >
      <ListItemText primary={route.name} />
    </ListItem>

    items.push(it)

    route.nested.map((route) => (
      this.buildItem(items, route, true)
    ))
  }

  buildMenu = (siteMap) => {
    const items = []

    siteMap.map((route) => (
      this.buildItem(items, route)
    ))

    return <List subheader={<ListSubheader> DAD VIEGAS </ListSubheader>}>
      { items }
    </List>
  }

  render (props) {
    return <Drawer width={300} className='app-drawer' open={this.props.open} onRequestClose={this.props.onRequestClose} >
      {this.buildMenu(siteMap)}
    </Drawer>
  }
}

export default withStyles(styles)(MenuListComponent)

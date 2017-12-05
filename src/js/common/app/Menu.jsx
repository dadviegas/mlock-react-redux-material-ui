import React, { PureComponent } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs'
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'

import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import Toggle from 'material-ui/Toggle'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'

import {List, ListItem} from 'material-ui/List'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentSend from 'material-ui/svg-icons/content/send'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import Divider from 'material-ui/Divider'
import ActionInfo from 'material-ui/svg-icons/action/info'
import MenuList from "./MenuList";
class HeaderComponent extends PureComponent {
  state = {
    openApp: false,
    isDrawerOpen: false
  }

  handleToggle = () => this.setState({ openApp: !this.state.openApp})

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
      this.handleToggle()
    }
  }

  render () {
    return <div>
      <MenuList open={this.state.openApp} />
      <AppBar
        style={{ position: "fixed", top: 0 }}
        title="DadViegas"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this.handleToggle}
        >
      </AppBar>
    </div>
  }
}

export default withRouter(props => <HeaderComponent {...props} />)

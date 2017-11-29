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

class HeaderComponent extends PureComponent {
  state = {
    openApp: false,
    openListItem: false
  }

  handleToggle = () => this.setState({openApp: !this.state.openApp})

  handleNestedListToggle = (item) => {
    this.setState({
      openListItem: item.state.openListItem,
    })
  }

  onLinkClick = (item, hash) => {
    window.location.hash = `#${hash}`
  }

  render () {
    return <div>
      <Drawer width={300} openSecondary={true} open={this.state.openApp} >
        <List>
          <ListItem primaryText="Home" leftIcon={<ContentInbox />} onClick={ (item) => this.onLinkClick(item, "home")} />
          <ListItem primaryText="About" leftIcon={<ActionGrade />} onClick={ (item) => this.onLinkClick(item, "about")} />
          <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
          <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
          <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
          <ListItem
              primaryText="Inbox"
              leftIcon={<ContentInbox />}
              initiallyOpen={true}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Starred"
                  leftIcon={<ActionGrade />}
                />,
                <ListItem
                  key={2}
                  primaryText="Sent Mail"
                  leftIcon={<ContentSend />}
                  disabled={true}
                  nestedItems={[
                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                  ]}
                />,
                <ListItem
                  key={3}
                  primaryText="Inbox"
                  leftIcon={<ContentInbox />}
                  open={this.state.openListItem}
                  onNestedListToggle={this.handleNestedListToggle}
                  nestedItems={[
                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                  ]}
                />,
              ]}
            />
        </List>
        <Divider />
        <List>
          <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
        </List>
      </Drawer>
      <AppBar
        style={{ position: "fixed", top: 0 }}
        title="DadViegas"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this.handleToggle}
        iconElementLeft={<IconButton> {this.state.openApp ? <NavigationClose /> : <NavigationMenu />}</IconButton>}
        >
      </AppBar>
    </div>
  }
}

export default withRouter(props => <HeaderComponent {...props} />)

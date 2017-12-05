import React, { PureComponent } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import { Tabs, Tab } from 'material-ui/Tabs'
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

import { List, ListItem } from 'material-ui/List'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentSend from 'material-ui/svg-icons/content/send'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import Divider from 'material-ui/Divider'
import ActionInfo from 'material-ui/svg-icons/action/info'

class MenuListComponent extends PureComponent {
  constructor (props) {
    super(props)
    console.log(props)
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

  render(props) {
    return <Drawer width={300} openSecondary={false} open={this.props.open}>
      <List>
        <ListItem primaryText="Home" leftIcon={<ContentInbox />} onClick={(item) => this.onLinkClick(item, "home")} />
        <ListItem primaryText="About" leftIcon={<ActionGrade />} onClick={(item) => this.onLinkClick(item, "about")} />
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
              open={this.state.isDrawerOpen}
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
  }
}

export default withRouter(props => <MenuListComponent {...props} />)

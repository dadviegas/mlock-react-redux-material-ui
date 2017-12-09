import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';

import MenuList from "./MenuList";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

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
    const { classes } = this.props;

    return <div>
      <MenuList open={this.state.openApp} onRequestChange={this.handleToggle}/>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Title
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  }
}

export default withStyles(styles)(HeaderComponent)

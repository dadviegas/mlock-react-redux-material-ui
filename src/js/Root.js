import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const theme = {
    "appBar": {
        "color": "#333",
        "textColor": "rgba(255, 255, 255, 0.87)"
    }
}

const themex = Object.assign({}, darkBaseTheme, theme)

const muiTheme0 = getMuiTheme(themex)
const muiTheme1 = getMuiTheme(darkBaseTheme)
const muiTheme2 = getMuiTheme(lightBaseTheme)

const themes = {
  muiTheme0: getMuiTheme(themex),
  muiTheme1: getMuiTheme(darkBaseTheme),
  muiTheme2: getMuiTheme(lightBaseTheme)
}

export default class Root extends Component {
  static propTypes = {
    routes: PropTypes.element.isRequired,
    store: PropTypes.object.isRequired,
    theme: PropTypes.string.isRequired
  }

  get content() {
    return (
      <Router>
        {this.props.routes}
      </Router>
    );
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <MuiThemeProvider muiTheme={this.props.theme && themes[this.props.theme] || themes.muiTheme0}>
          {this.content}
        </MuiThemeProvider>
      </Provider>
    );
  }
}

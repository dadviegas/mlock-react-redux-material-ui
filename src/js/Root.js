import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class Root extends Component {
  static propTypes = {
    routes: PropTypes.element.isRequired,
    store: PropTypes.object.isRequired
  }

  get content() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        {this.props.routes}
      </Router>
    );
  }

  render() {
    return (
      <Provider store={this.props.store}>
          {this.content}
      </Provider>
    );
  }
}

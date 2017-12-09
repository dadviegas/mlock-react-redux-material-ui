import React from 'react'
import MenuRouter from '../app/Menu'

class Home extends React.Component {
  render() {
    return (
      <div>
          <MenuRouter />
          <div style={{ margin: 20, paddingTop: 54 }}>
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default Home

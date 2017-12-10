import React from 'react'
import MenuRouter from '../app/Menu'

const style = {
  marginLeft: '4%',
  marginRight: '4%'
}

class Home extends React.Component {
  render () {
    return (
      <div>
        <MenuRouter />
        <div style={style}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Home

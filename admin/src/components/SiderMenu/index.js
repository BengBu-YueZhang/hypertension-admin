import { Menu } from 'antd'
import React from 'react'
import { withRouter, Link } from 'react-router-dom'

class SiderMenu extends React.Component {
  render () {
    return (
      <Menu
        theme="dark"
        selectedKeys={[this.props.location.pathname]}>
        <Menu.Item key="/home">
          <Link to="/home">首页</Link>
        </Menu.Item>
        <Menu.Item key="/bp">
          <Link to="/bp">血压记录</Link>
        </Menu.Item>
        <Menu.Item key="/bw">
          <Link to="/bw">体重记录</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(SiderMenu)

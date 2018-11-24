import React from 'react'
import { Layout, Icon } from 'antd'
import styles from './style.css'
import SiderMenu from '../SiderMenu/index.js'

class LayoutView extends React.Component {
  render () {
    return (
      <Layout>
        <Layout.Sider className={styles.sider} >
          <SiderMenu/>
        </Layout.Sider>
        <Layout>
          <Layout.Content className={styles.content}>
            {
              this.props.children
            }
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }
}

export default LayoutView

import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
import styles from './Login.css'

class LoginPage extends React.Component {

  componentDidMount () {
  }

  handleSubmit = () => {
  }

  render () {
    return (
      <section className={styles.root}>
        <div className={styles.formWrapper}>
          <h3 className={styles.title}>血压体重管理系统</h3>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Button block type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form>
        </div>
      </section>
    )
  }
}

export default LoginPage

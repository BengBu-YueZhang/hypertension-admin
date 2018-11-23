import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

class LoginPage extends React.Component {

  componentDidMount () {
  }

  handleSubmit = () => {
  }

  render () {
    return (
      <section>
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
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form>
      </section>
    )
  }
}

export default LoginPage

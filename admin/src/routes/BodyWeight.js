import React from 'react'
import { Form, Input, Button } from 'antd'
import styles from './BodyWeight.css'

const FormItem = Form.Item

class BodyWeightPage extends React.Component {

  componentDidMount () {
  }

  render () {
    return (
      <section className={styles.root}>
        <Form>
          <FormItem>
            <Input placeholder="体重"/>
          </FormItem>
          <FormItem>
            <Button block type="primary">确认</Button>
          </FormItem>
        </Form>
        <hr/>
      </section>
    )
  }
}

export default BodyWeightPage

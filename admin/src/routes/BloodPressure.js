import React from 'react'
import { Form, Input, Button } from 'antd'
import styles from './BloodPressure.css'

const FormItem = Form.Item

class BloodPressurePage extends React.Component {

  componentDidMount () {
  }

  render () {
    return (
      <section className={styles.root}>
        <Form>
          <FormItem>
            <Input placeholder="高压"/>
          </FormItem>
          <FormItem>
            <Input placeholder="低压"/>
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

export default BloodPressurePage

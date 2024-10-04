
import React from 'react'
import { Col, FormProps, Row } from 'antd'
import { Button, Form, Input } from 'antd';
type FieldType = {
  firstname?: string;
  lastname?:string;
  remember?: string;
  email?:string;
  message?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Contact = () => {
  return (
<div>
 <Row gutter={24} className='bg-primary'>
<Col lg={8}>
<h1 className='ps-5 pt-5'>Talk with Our salse</h1>

</Col>
<Col lg={12} >
<div className='pb-3 pt-5 bg-light mt-5 mb-5'>
<Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
 
  
    <Form.Item<FieldType>
      label="FirstName"
      name="firstname"
      rules={[{ required: true, message: 'Please input your firstname!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="LastName"
      name="lastname"
      rules={[{ required: true, message: 'Please input your lastname!' }]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item<FieldType>
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your email !' }]}
    >
      <Input.Password />
    </Form.Item>
    
    <Form.Item<FieldType>
      label="Message"
      name="message"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.TextArea />
    </Form.Item>
    {/* <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
  
    </Form.Item> */}

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>
</Col>
 </Row>
</div>

  )
}

export default Contact

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
<div style={{paddingTop:"10px"}}>
 <Row gutter={24} style={{backgroundColor:"blue",height:"90vh",padding:"30px",marginBottom:'50px'}}>
<Col lg={8}>
<h1>Contact</h1>

</Col>
<Col lg={12} style={{position:"relative"}}>
<div style={{position:"absolute",top:"50px",backgroundColor:"#fff",padding:"50px",left:"130px", boxShadow: "h-shadow v-shadow blur spread color inset", width:'80%'}}>
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
      rules={[{ required: true, message: 'Please enter your lastname!' }]}
    >
    
      <Input />
    </Form.Item>


    <Form.Item<FieldType>
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please enter your email!' }]}
    >
   <Input type='email' />
    </Form.Item>
    
    <Form.Item<FieldType>
      label="Message"
      name="message"
      rules={[{ required: true, message: 'Please enter your message!' }]}
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
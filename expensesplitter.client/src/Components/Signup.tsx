import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Form, Input, Button, Row, Col, Card, Typography, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from './UserContext';

const { Title } = Typography;

const Signup: React.FC = () => {
  const navigate = useNavigate();  // Ensure useNavigate is called within the component

  const {setUserData} = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
  
    setLoading(true);

    try {
      // Make POST request to the backend
      const response = await axios.post('https://localhost:7194/api/User/register', {
      Username: formData.username,
        Email: formData.email,
        Password: formData.password,
      });
      const { data } = response;
      // Handle success
      if (response.status === 200) {
        localStorage.setItem('userId',JSON.stringify(data.userId));
        let uname= localStorage.setItem('userName',JSON.stringify(formData.username));
        // localStorage.setItem('email', JSON.stringify(formData.email));
        // setUsername(formData.username)
        let email = localStorage.setItem('email', JSON.stringify(formData.email));
        setUserData({
          userName: formData.username,
          email: formData.email,
        });
        // console.log('username', data.username)
        // localStorage.setItem('userName',formData.username);
        message.success('User registered successfully!');
        setFormData({ username: '', email: '', password: '' });
        navigate('/checkNavRes');
      }

    } catch (error: any) {
      // Handle error
      if (error.response && error.response.data) {
        message.error(error.response.data);
      } else {
        message.error('Failed to register user.');
      }
    } finally {
      setLoading(false);
    }
  };



  
  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
      <Col xs={22} sm={16} md={12} lg={8}>
        <Card
          style={{ borderRadius: '10px', padding: '20px', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)' }}
          bordered={false}
        >
          <Title level={3} style={{ textAlign: 'center', marginBottom: '20px', color: "blueviolet", fontSize: "40px", fontWeight: "bold" }}>
            Sign Up
          </Title>
          <Form
            name="signup"
            layout="vertical"
            onFinish={handleSubmit}  // Attach handleSubmit on form submit
          >
            <Form.Item
              name="Username"
              label="Username"
              rules={[{ required: true, message: 'Please input your username!' }]}
              
            >
              <Input
                name="username"
                placeholder="Enter your username"
                onChange={handleChange}
                value={formData.username}
                onInput={(e: any) => e.target.value = e.target.value.length > 1 ? e.target.value : e.target.value.toUpperCase()}
              />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'The input is not valid E-mail!' }
              ]}
            >
              <Input
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                value={formData.email}
              />
            </Form.Item>

            <Form.Item
              name="Password"
              label="Password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={formData.password}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                style={{ width: '100%', height: "40px", marginTop: "15px", borderRadius: '50px', background: "blueviolet", color: "white", fontWeight: "bold" }}
              >
                Sign Up
              </Button>
            </Form.Item>
            Already have an account? <Link to={'/login'} style={{ fontSize: '15px' }}>Login here</Link>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Signup;

import { Form, Input, Button, Row, Col, Card, Typography, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext, useState } from 'react';
import UserContext from './UserContext';

const { Title } = Typography;

const Login: React.FC = () => {
  const { setUserData } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const response: any = await axios.post('https://localhost:7194/api/User/login', values);
  
      const { _id, username, email } = response.data;


      const userId = _id; 
      // Save the user info to local storage
      localStorage.setItem('userId', JSON.stringify(userId));
      localStorage.setItem('userName', JSON.stringify(username));
      localStorage.setItem('email', JSON.stringify(email));

      // Update the context with the user data
      setUserData({ userName: username, email });

      message.success('Login successful!');
      navigate('/checkNavRes');
    } catch (error) {
      message.error('Login failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <Col xs={22} sm={16} md={12} lg={8}>
        <Card
          style={{ borderRadius: '10px', padding: '20px', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)' }}
          bordered={false}
        >
          <Title level={3} style={{ textAlign: 'center', marginBottom: '20px', color: "blueviolet", fontSize: "40px", fontWeight: "bold" }}>
            Login
          </Title>
          <Form
            name="login"
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              name="Email"
              label="Email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'The input is not valid E-mail!' }
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              name="Password"
              label="Password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                loading={loading}
                style={{ width: '100%', height: "40px", marginTop: "15px", borderRadius: '50px', background: "blueviolet", color: "white", fontWeight: "bold" }}
              >
                Login
              </Button>
            </Form.Item>
            Already have an account? <Link to={'/signup'} style={{ fontSize: '15px' }} >SignUp here</Link>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;

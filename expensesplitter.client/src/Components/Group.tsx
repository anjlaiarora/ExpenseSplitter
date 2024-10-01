import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import './group.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };
  
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 },
    },
  };

 

const Group = () => {

  const [groupName, setGroupName] = useState('');
  const [members, setMembers] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const memberList = members.split(',').map(member => member.trim());
    if (groupName && memberList.length > 1) {
      // addGroup({ groupName, members: memberList });
      setGroupName('');
      setMembers('');
      setIsFormVisible(false);  // Close form after submission
    }
  };
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

    const onFinish = (values: any) => {
        console.log('Received values of form:', values);
      };
      // const split = useNavigate();
      // const handleSplit = () =>{
      //   split('/splitter')
      // }
  return (
    <>
   <button 
        className="btn btn-primary mb-3"
        onClick={toggleFormVisibility}
      >
        {isFormVisible ? 'Hide Form' : 'Create Group'}
      </button>

      {isFormVisible && (
        
    <Form
    name="dynamic_form_item"
    {...formItemLayoutWithOutLabel}
    onFinish={onFinish}
    style={{ maxWidth: 600, borderColor:'blue', }}
    
    >
    <Form.List
      name="names"
      rules={[
          {
              validator: async (_, names) => {
                  if (!names || names.length < 2) {
                      return Promise.reject(new Error('At least 2 Members'));
                    }
                },
            },
        ]}
        >
      {(fields, { add, remove }, { errors }) => (
          <>
          {fields.map((field, index) => (
              <Form.Item
              {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
              label={index === 0 ? 'Members' : ''}
              required={false}
              key={field.key}
              >
              <Form.Item
                {...field}
                validateTrigger={['onChange', 'onBlur']}
                rules={[
                    {
                        required: true,
                        whitespace: true,
                        message: "Please input member's name or delete this field.",
                    },
                ]}
                noStyle
              >
                <Input placeholder="Members name" style={{ width: '60%' }} />
              </Form.Item>
              {fields.length > 1 ? (
                  <MinusCircleOutlined
                  className="dynamic-delete-button"
                  onClick={() => remove(field.name)}
                  />
                ) : null}
            </Form.Item>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              style={{ width: '60%' }}
              icon={<PlusOutlined />}
            >
            </Button>
            {/* <Button
              type="dashed"
              onClick={() => {
                  add('The head item', 0);
                }}
                style={{ width: '60%', marginTop: '20px' }}
                icon={<PlusOutlined />}
                >
              Add field at head
            </Button> */}
            <Form.ErrorList errors={errors} />
          </Form.Item>
        </>
      )}
    </Form.List>

    <Form.Item>
      <Button type="primary" htmlType="submit" onSubmit={handleSubmit}>
        Submit
      </Button>
    </Form.Item>
  </Form>
   )}
      </>
  )
}

export default Group
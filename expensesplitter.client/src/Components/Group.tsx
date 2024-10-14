

import { useState, useEffect } from "react";
import { Form, Input, Button, List, notification } from "antd";
import axios from "axios";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import './group.css';

// Group interface definition
interface Group {
  _id: string;
  groupName: string;
  members: string[];
  ownerId: string;
}

const Group: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  
  const userId:any =JSON.parse(localStorage.getItem('userId') || '');

  
  // useEffect(() => {
  //   const fetchGroups = async () => {
  //     try {
  //       const response = await axios.get<Group[]>(`https://localhost:7194/api/Group/${userId}`);
        
  //       const userGroups = response.data.filter(group => group.ownerId === userId);
  //       setGroups(userGroups);
  //     } catch (error) {
  //       notification.error({ message: "Error fetching groups" });
  //     }
  //   };
  //   fetchGroups();
  // }, [userId]);

  
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  
  const onFinish = async (values: { groupName: string; members: string[] }) => {
    try {
      setIsLoading(true);
      const groupData = {
        ...values,
        ownerId: userId, 
      };
      console.log("respone", groupData)
      const response = await axios.post<Group>("https://localhost:7194/api/Group/CreatingGroup", groupData);
      
      setGroups([...groups, response.data]); 
      notification.success({ message: "Group Created Successfully" });
      setIsFormVisible(false); 
    } catch (error) {
      notification.error({ message: "Error creating group" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        className="btn btn-primary mb-3 w-75"
        onClick={toggleFormVisibility}
      >
        {isFormVisible ? 'Hide Form' : 'Create Group'}
      </button>

      {isFormVisible && (
        <Form
          name="group_form"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            name="groupName"
            rules={[{ required: true, message: "Enter group name" }]}
          >
            <Input placeholder="Group Name" />
          </Form.Item>

          {/* Add Members */}
          <Form.List
            name="members"
            rules={[
              {
                validator: async (_, members) => {
                  if (!members || members.length < 2) {
                    return Promise.reject(new Error('At least 2 members are required.'));
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    required={false}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[{ required: true, message: "Enter member's name or remove this field." }]}
                      noStyle
                    >
                      <Input placeholder="Member's Name" style={{ width: '60%' }} />
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
                    Add a member
                  </Button>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}

      {/* Display list of groups */}
      <List
        dataSource={groups}
        renderItem={(group) => (
          <List.Item>{group.groupName}</List.Item>
        )}
        style={{ marginTop: "20px" }}
      />
    </>
  );
};

export default Group;

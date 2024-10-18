import { useState, useEffect } from "react";
import { Form, Input, Button, notification, Modal } from "antd";
import axios from "axios";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import './group.css';
import TableOfGroup from "./TableOfGroup";

interface Group {
  _id: string;
  groupName: string;
  members: string[];
  ownerId: string;
}

const Group: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingGroup, setEditingGroup] = useState<any>(null);
  const [refresh,setRefresh] = useState<any>(false);
  const userId = localStorage.getItem('userId');
  const [groupsData, setGroupsData] = useState<any>();

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get<Group[]>(`https://localhost:7194/api/Group?ownerId=${userId}`);
        setGroupsData(response.data);
        const userGroups = response.data.filter(group => group.ownerId === userId);
        setGroups(userGroups);
        setRefresh((pr:any)=>!pr)
      } catch (error) {
        notification.error({ message: "Error fetching groups" });
      }
    };
    fetchGroups();
  }, [userId ,refresh]);

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onFinish = async (values: { groupName: string; members: string[] }) => {
    try {
      setIsLoading(true);

      if (editingGroup) {
        // console.log("fhfyfyr", editingGroup)
        await axios.put(`https://localhost:7194/api/Group/${editingGroup.id}`, {
          ...values,
          ownerId: userId,
        });

        const updatedGroups = groups.map(group =>
          group._id === editingGroup._id ? { ...group, ...values } : group
        );
        setGroups(updatedGroups);
        notification.success({ message: "Group Updated Successfully" });
      } else {
        const groupData = {
          ...values,
          ownerId: userId,
        };
        const response = await axios.post<Group>("https://localhost:7194/api/Group/CreatingGroup", groupData);
        setGroups([...groups, response.data]);
        notification.success({ message: "Group Created Successfully" });
      }

      setIsModalVisible(false);
      // setIsmodelVisible((pr:any)=>!pr)
      setEditingGroup(null); 
    } catch (error) {
      notification.error({ message: editingGroup ? "Error updating group" : "Error creating group" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditGroup = (group: Group) => {
    setEditingGroup(group);
    setIsModalVisible(true);
  };

  return (
    <>
      <h1 className="fs-5 ps-2">
        Create Group
        <Button
          className="float-end ps-5 pe-5 rounded-5 bg-black me-3"
          type="primary"
          onClick={() => {
            setEditingGroup(null); 
            toggleModalVisibility();
          }}
        >
          Add
        </Button>
      </h1>

      <Modal
        title={editingGroup ? "Edit Group" : "Create Group"} 
        visible={isModalVisible}
        onCancel={toggleModalVisibility}
        footer={null}  
      >
        <Form
          name="group_form"
          onFinish={onFinish}
          initialValues={editingGroup ? editingGroup : { groupName: '', members: [''] }} 
          style={{ maxWidth: 600 }}
          
        >
          <Form.Item
            name="groupName"
            rules={[{ required: true, message: "Enter group name" }]}
          >
            
            <Input placeholder="Group Name" />
          </Form.Item>

         
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
                  <Form.Item required={false} key={field.key}>
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
              {editingGroup ? 'Update' : 'Submit'} 
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <br />
      <div>
        <TableOfGroup groupsData={groupsData} handleEditGroup={handleEditGroup} />
      </div>
    </>
  );
};

export default Group;

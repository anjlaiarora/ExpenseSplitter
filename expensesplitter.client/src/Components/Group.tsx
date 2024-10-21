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
  const [editingGroup, setEditingGroup] = useState<Group | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false);


  const userId = localStorage.getItem('userId');
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get<Group[]>(`https://localhost:7194/api/Group?ownerId=${userId}`);
        const userGroups = response.data.filter(group => group.ownerId === userId);
        setGroups(userGroups);
      } catch (error) {
        notification.error({ message: "Error fetching groups" });
      }
    };
    fetchGroups();
  }, [userId, refresh]);

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
    form.resetFields();
  };

  const createGroup = async (values: { groupName: string; members: string[] }) => {
    try {
      setIsLoading(true);
      const groupData = { ...values, ownerId: userId };
      const response = await axios.post<Group>("https://localhost:7194/api/Group/CreatingGroup", groupData);
      setGroups(prev => [...prev, response.data]);
      notification.success({ message: "Group Created Successfully" });
      form.resetFields(); // Reset form fields after creation
    } catch (error) {
      notification.error({ message: "Error creating group" });
    } finally {
      setIsLoading(false);
    }
  };

  const updateGroup = async (values: { groupName: string; members: string[] }) => {
    try {
      setIsLoading(true);
      await axios.put(`https://localhost:7194/api/Group/${editingGroup!._id}`, {
        ...values,
        ownerId: userId,
      });

      const updatedGroups = groups.map(group =>
        group._id === editingGroup!._id ? { ...group, ...values } : group
      );
      setGroups(updatedGroups);
      notification.success({ message: "Group Updated Successfully" });
    } catch (error) {
      notification.error({ message: "Error updating group" });
    } finally {
      setIsLoading(false);
    }
  };

  const onFinish = (values: { groupName: string; members: string[] }) => {
    if (editingGroup) {
      updateGroup(values);
    } else {
      createGroup(values);
    }
    setIsModalVisible(false);
    setEditingGroup(null);
  };

  const handleEditGroup = (group: Group) => {
    setEditingGroup(group);
    form.setFieldsValue(group); // Set the form fields to the editing group's values
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
            form.resetFields(); // Reset form when adding a new group
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
      >
        <Form
          form={form} // Assign the form instance
          name="group_form"
          onFinish={onFinish}
          initialValues={{ groupName: '', members: [''] }} // Default initial values
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
                      <Input placeholder="Member's Name" style={{ width: '60%' }}
                        onInput={(e: any) => e.target.value = e.target.value.length > 1 ? e.target.value : e.target.value.toUpperCase()}
                      />
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
        <TableOfGroup groupsData={groups} handleEditGroup={handleEditGroup} />
      </div>
    </>
  );
};

export default Group;

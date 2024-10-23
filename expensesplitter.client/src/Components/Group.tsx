


// import React, { useState, useEffect } from "react";
// import { Form, Input, Button, notification, Modal, Table, Popconfirm } from "antd";
// import axios from "axios";
// import { MinusCircleOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

// interface Group {
//   id: any;
//   _id: string;
//   groupName: string;
//   members: string[];
//   ownerId: string;
// }

// const Group :any= (props:any) => {
//   const [groups, setGroups] = useState<Group[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [editingGroup, setEditingGroup] = useState<Group | null>(null);
//   const [refresh, setRefresh] = useState<boolean>(false);

//   const userId = localStorage.getItem('userId');
//   const [form] = Form.useForm();

//   const fetchGroups = async () => {
//     try {
//       const response = await axios.get<Group[]>(`https://localhost:7194/api/Group?ownerId=${userId}`);
//       const userGroups = response.data.filter(group => group.ownerId === userId);
//       setGroups(userGroups);
//     } catch (error) {
//       notification.error({ message: "Error fetching groups" });
//     }
//   };

//   useEffect(() => {
//     fetchGroups();
//   }, [userId, refresh]);

//   const toggleModalVisibility = () => {
//     setIsModalVisible(!isModalVisible);
//     form.resetFields();
//   };

//   const createGroup = async (values: { groupName: string; members: string[] }) => {
//     try {
//       setIsLoading(true);
//       const groupData = { ...values, ownerId: userId };
//       const response = await axios.post<Group>("https://localhost:7194/api/Group/CreatingGroup", groupData);
//       setGroups(prev => [...prev, response.data]);
//       notification.success({ message: "Group Created Successfully" });
//       form.resetFields();
//       fetchGroups();
//       props.setR((pre:any)=>!pre)
//     } catch (error) {
//       notification.error({ message: "Error creating group" });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const updateGroup = async (values: { groupName: string; members: string[] }) => {
//     try {
//       setIsLoading(true);
//       await axios.put(`https://localhost:7194/api/Group/${editingGroup!.id}`, {
//         ...values,
//         ownerId: userId,
//       });
//       const updatedGroups = groups.map(group =>
//         group._id === editingGroup!._id ? { ...group, ...values } : group
//       );
//       setGroups(updatedGroups);
//       notification.success({ message: "Group Updated Successfully" });
//     } catch (error) {
//       notification.error({ message: "Error updating group" });
//     } finally {
//       setIsLoading(false);
//       fetchGroups();
//     }
//   };

//   const onFinish = (values: { groupName: string; members: string[] }) => {
//     if (editingGroup) {
//       updateGroup(values);
//     } else {
//       createGroup(values);
//     }
//     setIsModalVisible(false);
//     setEditingGroup(null);
//   };

//   const handleEditGroup = (group: Group) => {
//     setEditingGroup(group);
//     form.setFieldsValue(group);
//     setIsModalVisible(true);
//   };

//   const handleDelete = async (id: string) => {
//     try {
//       await axios.delete(`https://localhost:7194/api/Group/${id}`);
//       // notification.success({ message: 'Group Deleted Successfully' });
//       setRefresh(prev => !prev);
//     } catch (error) {
//       notification.error({ message: 'Error deleting group' });
//     }
//   };

//   const columns = [
//     {
//       title: 'Group Name',
//       dataIndex: 'groupName',
//       key: 'groupName',
//       render: (text: string) => <span className="font-semibold">{text}</span>,
//     },
//     {
//       title: 'Members',
//       dataIndex: 'members',
//       key: 'members',

//       // render: (members: string[]) => (
//       //   <div className="max-h-24 overflow-y-auto">
//       //     {members.map((member, index) => (
//       //       <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//       //         {member}
//       //       </span>
//       //     ))}
//       //   </div>
//       // ),
//       render: (members: string[]) => (
//         <div className="max-h-24 overflow-y-auto">
//           {members?.map((member, index) => (
//             <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//               {member}
//             </span>
//           ))}
//         </div>
//       ),
      
//     },
//     {
//       title: 'Actions',
//       key: 'actions',
//       render: (_: any, record: Group) => (
//         <div className="space-x-2">
//           <Button
//             type="primary"
//             icon={<EditOutlined />}
//             onClick={() => {handleEditGroup(record)}}
//             className="bg-blue-500 hover:bg-blue-600"
//           >
            
//           </Button>
//           <Popconfirm
//             title="Are you sure you want to delete this group?"
//             onConfirm={() => handleDelete(record.id)}
//             okText="Yes"
//             cancelText="No"
//           >
//             <Button
//               type="primary"
//               danger
//               icon={<DeleteOutlined />}
//               className="bg-red-500 hover:bg-red-600"
//             >
              
//             </Button>
//           </Popconfirm>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="p-6  min-h-screen ">
//       <div className="max-w-10xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">Manage Groups</h1>
//           <Button
//             type="primary"
//             onClick={() => {
//               setEditingGroup(null);
//               form.resetFields();
//               toggleModalVisibility();
//             }}
//             className="bg-black hover:bg-green-600"
//             icon={<PlusOutlined />}
//           >
//             Add Group
//           </Button>
//         </div>

//         <div className="bg-white rounded-lg  overflow-hidden">
//         <Table
//         dataSource={groups && groups.length > 0 ? groups : []}  // Ensure groups is a valid array
//         columns={columns}
//         rowKey="id"
//         pagination={{ pageSize: 5 }}
//       />

//         </div>

//         <Modal
//           title={editingGroup ? "Edit Group" : "Create Group"}
//           visible={isModalVisible}
//           onCancel={toggleModalVisibility}
//           footer={null}
//         >
//           <Form
//             form={form}
//             name="group_form"
//             onFinish={onFinish}
//             initialValues={{ groupName: '', members: [''] }}
//             layout="vertical"
//           >
//             <Form.Item
//               name="groupName"
//               label="Group Name"
//               rules={[{ required: true, message: "Enter group name" }]}
//             >
//               <Input
//                 placeholder="Group Name"
//                 onInput={(e: React.FormEvent<HTMLInputElement>) => {
//                   const target = e.target as HTMLInputElement;
//                   target.value = target.value.length > 1 ? target.value : target.value.toUpperCase();
//                 }}
//               />
//             </Form.Item>

//             <Form.List
//               name="members"
//               rules={[
//                 {
//                   validator: async (_, members) => {
//                     if (!members || members.length < 2) {
//                       return Promise.reject(new Error('At least 2 members are required.'));
//                     }
//                   },
//                 },
//               ]}
//             >
//               {(fields, { add, remove }, { errors }) => (
//                 <>
//                   {fields.map((field, index) => (
//                     <Form.Item
//                       required={false}
//                       key={field.key}
//                       label={index === 0 ? "Members" : ""}
//                     >
//                       <div className="flex items-center">
//                         <Form.Item
//                           {...field}
//                           validateTrigger={['onChange', 'onBlur']}
//                           rules={[{ required: true, message: "Enter member's name or remove this field." }]}
//                           noStyle
//                         >
//                           <Input
//                             placeholder="Member's Name"
//                             className="flex-grow"
//                             onInput={(e: React.FormEvent<HTMLInputElement>) => {
//                               const target = e.target as HTMLInputElement;
//                               target.value = target.value.length > 1 ? target.value : target.value.toUpperCase();
//                             }}
//                           />
//                         </Form.Item>
//                         {fields.length > 1 && (
//                           <MinusCircleOutlined
//                             className="ml-2 flex-shrink-0"
//                             onClick={() => remove(field.name)}
//                           />
//                         )}
//                       </div>
//                     </Form.Item>
//                   ))}
//                   <Form.Item>
//                     <Button
//                       type="dashed"
//                       onClick={() => add()}
//                       icon={<PlusOutlined />}
//                       className="w-full"
//                     >
//                       Add a member
//                     </Button>
//                     <Form.ErrorList errors={errors} />
//                   </Form.Item>
//                 </>
//               )}
//             </Form.List>

//             <Form.Item>
//               <Button type="primary" htmlType="submit" loading={isLoading} className="w-full">
//                 {editingGroup ? 'Update' : 'Submit'}
//               </Button>
//             </Form.Item>
//           </Form>
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default Group;










import React, { useState, useEffect } from "react";
import { Form, Input, Button, notification, Modal, Table, Popconfirm, Dropdown, Menu } from "antd";
import { MinusCircleOutlined, PlusOutlined, EditOutlined, DeleteOutlined, DownOutlined } from "@ant-design/icons";
import axios from "axios";

interface Group {
  id: any;
  _id: string;
  groupName: string;
  members: string[];
  ownerId: string;
}

const Group: any = (props: any) => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingGroup, setEditingGroup] = useState<Group | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false);

  const userId = localStorage.getItem('userId');
  const [form] = Form.useForm();

  const fetchGroups = async () => {
    try {
      const response = await axios.get<Group[]>(`https://localhost:7194/api/Group?ownerId=${userId}`);
      const userGroups = response.data.filter(group => group.ownerId === userId);
      setGroups(userGroups);
    } catch (error) {
      notification.error({ message: "Error fetching groups" });
    }
  };

  useEffect(() => {
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
      form.resetFields();
      fetchGroups();
      props.setR((pre: any) => !pre);
    } catch (error) {
      notification.error({ message: "Error creating group" });
    } finally {
      setIsLoading(false);
    }
  };

  const updateGroup = async (values: { groupName: string; members: string[] }) => {
    try {
      setIsLoading(true);
      await axios.put(`https://localhost:7194/api/Group/${editingGroup!.id}`, {
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
      fetchGroups();
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
    form.setFieldsValue(group);
    setIsModalVisible(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`https://localhost:7194/api/Group/${id}`);
      setRefresh(prev => !prev);
      notification.success({ message: "Group deleted successfully" });

    } catch (error) {
      notification.error({ message: 'Error deleting group' });
    }
  };

  const columns = [
    {
      title: 'Group Name',
      dataIndex: 'groupName',
      key: 'groupName',
      render: (text: string) => <span className="font-semibold">{text}</span>,
    },
    {
      title: 'Members',
      dataIndex: 'members',
      key: 'members',
      render: (members: string[]) => {
        const menu = (
          <Menu>
            {members?.map((member, index) => (
              <Menu.Item key={index}>
                {member}
              </Menu.Item>
            ))}
          </Menu>
        );
        return (
          <Dropdown overlay={menu}>
            <Button>
              View Members <DownOutlined />
            </Button>
          </Dropdown>
        );
      },
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Group) => (
        <div className="space-x-2">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => { handleEditGroup(record) }}
            className="bg-blue-500 hover:bg-blue-600"
          />
          <Popconfirm
            title="Are you sure you want to delete this group?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              className="bg-red-500 hover:bg-red-600"
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-10xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Manage Groups</h1>
          <Button
            type="primary"
            onClick={() => {
              setEditingGroup(null);
              form.resetFields();
              toggleModalVisibility();
            }}
            className="bg-black hover:bg-green-600"
            icon={<PlusOutlined />}
          >
            Add Group
          </Button>
        </div>

        <div className="bg-white rounded-lg overflow-hidden">
          <Table
            dataSource={groups && groups.length > 0 ? groups : []}  // Ensure groups is a valid array
            columns={columns}
            rowKey="id"
            pagination={{ pageSize: 5 }}
          />
        </div>

        <Modal
          title={editingGroup ? "Edit Group" : "Create Group"}
          visible={isModalVisible}
          onCancel={toggleModalVisibility}
          footer={null}
        >
          <Form
            form={form}
            name="group_form"
            onFinish={onFinish}
            initialValues={{ groupName: '', members: [''] }}
            layout="vertical"
          >
            <Form.Item
              name="groupName"
              label="Group Name"
              rules={[{ required: true, message: "Enter group name" }]}
            >
              <Input
                placeholder="Group Name"
                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                  const target = e.target as HTMLInputElement;
                  target.value = target.value.length > 1 ? target.value : target.value.toUpperCase();
                }}
              />
            </Form.Item>

            <Form.List
  name="members"
  rules={[
    {
      validator: async (_, members) => {
        if (!members || members.length < 2) {
          return Promise.reject(new Error('At least 2 members are required.'));
        }

        // Check for duplicate members
        const memberNames = members.map((member: string) => member.toLowerCase().trim());
        const hasDuplicates = memberNames.some((name: any, idx: any) => memberNames.indexOf(name) !== idx);
        if (hasDuplicates) {
          return Promise.reject(new Error('This name of member already exist'));
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
          label={index === 0 ? "Members" : ""}
        >
          <div className="flex items-center">
            <Form.Item
              {...field}
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                { required: true, message: "Enter member's name or remove this field." },
              ]}
              noStyle
            >
              <Input
                placeholder="Member's Name"
                className="flex-grow"
                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                  const target = e.target as HTMLInputElement;
                  target.value = target.value.length > 1 ? target.value : target.value.toUpperCase();
                }}
              />
            </Form.Item>
            {fields.length > 1 && (
              <MinusCircleOutlined
                className="ml-2 flex-shrink-0"
                onClick={() => remove(field.name)}
              />
            )}
          </div>
        </Form.Item>
      ))}
      <Form.Item>
        <Button
          type="dashed"
          onClick={() => add()}
          icon={<PlusOutlined />}
          className="w-full"
        >
          Add a member
        </Button>
        <Form.ErrorList errors={errors} />
      </Form.Item>
    </>
  )}
</Form.List>


            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isLoading} className="w-full">
                {editingGroup ? 'Update' : 'Submit'}
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Group;

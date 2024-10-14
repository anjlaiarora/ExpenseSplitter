import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, InputNumber } from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
  key: React.Key;
  name: string;
  members: number;
  description: string;
}

const TableOfGroup = () => {
  // Initial state with the data
  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: 1,
      name: 'John Brown',
      members: 0,
      description: 'sssss',
    },
    {
      key: 2,
      name: 'Jim Green',
      members: 0,
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      key: 4,
      name: 'Joe Black',
      members: 0,
      description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editing, setEditing] = useState<DataType | null>(null);

  // Delete function to remove a record by key
  const deleteAction = (key: React.Key) => {
    setDataSource((prevData) => prevData.filter((item) => item.key !== key));
  };

  // Update function to open the modal and set the record for editing
  const updateAction = (record: DataType) => {
    setEditing(record);
    setIsModalVisible(true);
  };

  // Handle form submission and update data in the table
  const handleUpdate = (values: { name: string; members: number; description: string }) => {
    setDataSource((prevData) =>
      prevData.map((item) =>
        item.key === editing?.key ? { ...item, ...values } : item
      )
    );
    setIsModalVisible(false);
    setEditing(null); // Clear the record after updating
  };

  // Cancel modal
  const handleCancel = () => {
    setIsModalVisible(false);
    setEditing(null);
  };

  // Table columns with the update and delete actions
  const columns: TableColumnsType<DataType> = [
    { title: 'Group Name', dataIndex: 'name', key: 'name' },
    { title: 'Members', dataIndex: 'members', key: 'members' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => updateAction(record)} className="bg-primary text-light me-5">
            Update
          </Button>
          <Button type="link" onClick={() => deleteAction(record.key)} className="bg-dark text-light">
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <Table<DataType>
        columns={columns}
        expandable={{
          expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
        }}
        dataSource={dataSource}
      />

      {/* Modal for updating the record */}
      <Modal
        title="Update Group"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        {editing && (
          <Form
            initialValues={{
              name: editing.name,
              members: editing.members,
              description: editing.description,
            }}
            onFinish={handleUpdate}
          >
            <Form.Item
              name="name"
              label="Group Name"
              rules={[{ required: true, message: 'Please enter the group name' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="members"
              label="Members"
              rules={[{ required: true, message: 'Please enter the number of members' }]}
            >
              <InputNumber min={0} />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: 'Please enter the description' }]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" >
                Update
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default TableOfGroup;

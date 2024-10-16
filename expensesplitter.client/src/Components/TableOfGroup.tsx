import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, InputNumber } from 'antd';
import type { TableColumnsType } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";


interface DataType {
  key: React.Key;
  name: string;
  members: number;
  description: string;
}
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
const TableOfGroup = ({groupsData}:any) => {
  // Initial state with the data
  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: 1,
      name: 'John Brown',
      members: 0,
      description: '',
    },
    {
      key: 2,
      name: 'Jim Green',
      members: 0,
      description: '',
    },
    {
      key: 4,
      name: 'Joe Black',
      members: 0,
      description: '',
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
  const handleUpdate = (values: { name: string; members: number; AddField: string }) => {
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
    { title: 'Group Name', dataIndex: 'groupName', key: 'name' },
    { title: 'Members', dataIndex: 'members', key: 'members' },
    // { title: 'Add Field', dataIndex: 'Add Field', key:},
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
  // const onFinish = (values: any) => {
  //   console.log('Received values of form:', values);
  // };
  return (
    <div>
      <Table<DataType>
        columns={columns}
        expandable={{
          expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.members}</p>,
        }}
        dataSource={groupsData}
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
              AddField: editing,
              // description: editing.description,
            }}
            onFinish={handleUpdate}
            name="dynamic_form_item"
            {...formItemLayoutWithOutLabel}
            // onFinish={onFinish}
            style={{ maxWidth: 600 }}
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

            <Form.List
              name="names"
              rules={[
                {
                  validator: async (_, names) => {
                    // if (!names || names.length < 2) {
                    //   return Promise.reject(new Error('At least 2 passengers'));
                    // }
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
                            message: "Please input Member's name or delete this field.",
                          },
                        ]}
                        noStyle
                      >
                        <Input placeholder="members name" style={{ width: '60%' }} />
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
                      Add field
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
                    </Button>*/}
                    <Form.ErrorList errors={errors} /> 
                  </Form.Item>
                </>
              )}
            </Form.List>
            {/* <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item> */}

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

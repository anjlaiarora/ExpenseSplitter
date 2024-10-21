import React, { useState } from 'react';
import { Table, Button, message, Card } from 'antd';
import type { TableColumnsType } from 'antd';
import axios from 'axios';

interface DataType {
  id: string;
  groupName: string;
  members: string[];
  description: string;
}

const TableOfGroup = ({ groupsData, handleEditGroup }: any) => {
  const [expendedRowKey, setExpendedRowKey] = useState<string | null>(null);

  const deleteAction = async (id: string) => {
    try {
      await axios.delete(`https://localhost:7194/api/Group/${id}`);
      // Optionally, you can refresh the groups data here
      message.success('Group deleted successfully');
    } catch (error) {
      message.error('Failed to delete group');
    }
  };

  const columns: TableColumnsType<DataType> = [
    { title: 'Group Name', dataIndex: 'groupName', key: 'groupName' },
    {
      title: 'Members',
      dataIndex: 'members',
      key: 'members',
      render: (members: string[]) => members.length,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, group) => (
        <>
          <Button
            type="link"
            onClick={() => handleEditGroup(group)}
            className="bg-primary text-light me-5"
          >
            Update
          </Button>
          <Button
            type="link"
            onClick={() => deleteAction(group.id)}
            className="bg-dark text-light"
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  // const handleExpand = (expanded: boolean, record: DataType) => {
  //   setExpendedRowKey((prev) =>
  //     expanded ? [...prev, record.id] : prev.filter((key) => key !== record.id)
  //   );
  // };

  return (
    <div>
      <Table
        rowKey="id"
        dataSource={groupsData}
        columns={columns}
        onRow={(record) => ({
          // onClick: () => console.log(record)
        })}
        expandable={{
          expandedRowRender: (record) => {
            return (
              <>
                <p style={{ margin: 0, fontWeight: 'bold' }}>Members: {record.members.join(', ')}</p>
              </>
            )
          },
          expandedRowKeys: expendedRowKey ? [expendedRowKey] : [],
          onExpand: (expended, record) => {
            // console.log(expended, record)
            setExpendedRowKey(expended ? record.id : null)
          },
        }}
      />
    </div>
  );
};

export default TableOfGroup;

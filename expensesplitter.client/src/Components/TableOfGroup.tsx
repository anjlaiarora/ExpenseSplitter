import React, { useState } from 'react';
import { Table, Button, message } from 'antd';
import type { TableColumnsType } from 'antd';
import axios from 'axios';

interface DataType {
  id: string;
  groupName: string;
  members: string[];
  description: string;
}

const TableOfGroup = ({ groupsData, handleEditGroup }: any) => {
  const [dataSource, setDataSource] = useState<DataType[]>(groupsData);
  // const [refresh, setRefresh] = useState(false)
//  const [deletegroup, setDeleteGroup] = useState<any>()
  const deleteAction = async (id: string) => {
    
    try {
      await axios.delete(`https://localhost:7194/api/Group/${id}`);
      console.log("nbajhag", id)
      setDataSource([])
      message.success('Group deleted successfully');
    } catch (error) {
      // console.error('Failed to delete group:', error);
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

  return (
    <div>
      <Table<DataType>
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <div>
              <p style={{ margin: 0, fontWeight:'bold'}}>Members: {record.members.join(', ')}</p>
              
            </div>
          ),
          rowExpandable: (record) => record.members.length > 0, 
        }}
        dataSource={groupsData}
      />
    </div>
  );
};

export default TableOfGroup;

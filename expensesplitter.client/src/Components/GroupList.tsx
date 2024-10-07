import React, { useEffect, useState } from 'react';
import { List, message } from 'antd';
import axios from 'axios';

const GroupList: React.FC = () => {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const userId = localStorage.getItem('userId'); // Get the user ID from localStorage
                const response = await axios.get(`/api/Group/user/${userId}`);
                setGroups(response.data);
            } catch (error) {
                message.error('Failed to load groups.');
            } finally {
                setLoading(false);
            }
        };

        fetchGroups();
    }, []);

    return (
        <List
            loading={loading}
            itemLayout="horizontal"
            dataSource={groups}
            renderItem={group => (
                <List.Item>
                    <List.Item.Meta
                        title={group.GroupName}
                        description={`Members: ${group.Members.length}`}
                    />
                </List.Item>
            )}
        />
    );
};

export default GroupList;

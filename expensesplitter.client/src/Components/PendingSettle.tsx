import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { notification, Button, Spin, Table } from 'antd';

interface Group {
  id: string;
  _id: string;
  groupName: string;
  members: string[];
  ownerId: string;
}

interface SettlementDetail {
  payee: string;
  amount: number;
}

interface SettlementResult {
  payer: string;
  settlements: SettlementDetail[];
}

const PendingSettle = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);
  const [settlements, setSettlements] = useState<Record<string, SettlementResult[]>>({});
  const [loadingSettlements, setLoadingSettlements] = useState<Record<string, boolean>>({});
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get<Group[]>(
          `https://localhost:7194/api/Group?ownerId=${userId}`
        );

        if (response.data && response.data.length > 0) {
          setGroups(response.data);
        } else {
          notification.warning({ message: "No groups found" });
        }
      } catch (error) {
        console.error("Error fetching groups:", error);
        notification.error({ message: "Error fetching groups" });
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, [userId]);

  const handleFetchSettlements = async (groupId: string) => {
    setLoadingSettlements((prev) => ({ ...prev, [groupId]: true }));

    try {
      console.log("group",groupId)
      const response = await axios.post<any>(
        'https://localhost:7194/api/Expense/Cal',

        { groupId }
      );
      // console.log("res", response);

      setSettlements((prev) => ({ ...prev, [groupId]: response.data }));

    } catch (error) {
      console.error("Error fetching settlements:", error);
      notification.error({ message: "Error fetching settlements" });
    } finally {
      setLoadingSettlements((prev) => ({ ...prev, [groupId]: false }));
    }
  };

  const settlementColumns = [
    {
      title: 'Payer',
      dataIndex: 'payer',
      key: 'payer',
    },
    {
      title: 'Payee and Amount',
      dataIndex: 'settlements',
      key: 'payee',
      render: (settlements: SettlementDetail[]) =>
        settlements.map((settlement, index) => (
          <div key={index}>
            {settlement.payee}: ${settlement.amount.toFixed(2)}
          </div>
        )),
    },
  ];

  return (
    <div>
      {loading ? (
        <Spin tip="Loading groups..." />
      ) : (
        <div>
          {groups.length > 0 ? (
            groups.map((group) => (
              <div key={group._id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
                <h2>{group.groupName}</h2>
                <Button
                  onClick={() => handleFetchSettlements(group.id)}
                  loading={loadingSettlements[group._id]}
                >
                  Show Settlements
                </Button>

                {settlements[group._id] && (
                  <Table
                    dataSource={settlements[group._id]}
                    columns={settlementColumns}
                    rowKey={(record) => record.payer}
                    pagination={false}
                    style={{ marginTop: '20px' }}
                  />
                )}
              </div>
            ))
          ) : (
            <p>No groups to display</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PendingSettle;

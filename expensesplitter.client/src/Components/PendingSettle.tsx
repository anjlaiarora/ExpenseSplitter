




// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { notification, Button, Spin, Table, Card, Row, Col } from 'antd';

// interface Group {
//   id: string;
//   _id: string;
//   groupName: string;
//   members: string[];
//   ownerId: string;
// }

// interface SettlementDetail {
//   payee: string;
//   amount: number;
// }

// interface SettlementResult {
//   payer: string;
//   settlements: SettlementDetail[];
// }

// const PendingSettle = () => {
//   const [groups, setGroups] = useState<Group[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [settlements, setSettlements] = useState<Record<string, SettlementResult[]>>({});
//   const [loadingSettlements, setLoadingSettlements] = useState<Record<string, boolean>>({});
//   const userId = localStorage.getItem('userId');

//   useEffect(() => {
//     const fetchGroups = async () => {
//       try {
//         const response = await axios.get<Group[]>(
//           `https://localhost:7194/api/Group?ownerId=${userId}`
//         );

//         if (response.data && response.data.length > 0) {
//           setGroups(response.data);
//         } else {
//           notification.warning({ message: "No groups found" });
//         }
//       } catch (error) {
//         console.error("Error fetching groups:", error);
//         notification.error({ message: "Error fetching groups" });
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGroups();
//   }, [userId]);

//   const handleFetchSettlements = async (groupId: string) => {
//     setLoadingSettlements((prev) => ({ ...prev, [groupId]: true }));

//     try {
//       const response = await axios.post<any>(
//         'https://localhost:7194/api/Expense/Cal',
//         { groupId }
//       );

//       setSettlements((prev) => ({ ...prev, [groupId]: response.data }));
//     } catch (error) {
//       console.error("Error fetching settlements:", error);
//       notification.error({ message: "Error fetching settlements" });
//     } finally {
//       setLoadingSettlements((prev) => ({ ...prev, [groupId]: false }));
//     }
//   };

//   const settlementColumns = [
//     {
//       title: 'Payer',
//       dataIndex: 'payer',
//       key: 'payer',
//     },
//     {
//       title: 'Payee and Amount',
//       dataIndex: 'settlements',
//       key: 'payee',
//       render: (settlements: SettlementDetail[]) =>
//         settlements.map((settlement, index) => (
//           <div key={index}>
//             {settlement.payee}: ${settlement.amount.toFixed(2)}
//           </div>
//         )),
//     },
//   ];

//   return (
//     <div>
//       {loading ? (
//         <Spin tip="Loading groups..." />
//       ) : (
//         <div>
//           {groups.length > 0 ? (
//             <Row gutter={[16, 16]}>
//               {groups.map((group) => (
//                 <Col span={24} key={group._id}>
//                   <Card
//                     title={group.groupName}
//                     extra={
//                       <Button
//                         onClick={() => handleFetchSettlements(group.id)}
//                         loading={loadingSettlements[group._id]}
//                       >
//                         Show Settlements
//                       </Button>
//                     }
//                   >
//                     {settlements[group._id] ? (
//                       <Table
//                         dataSource={settlements[group._id]}
//                         columns={settlementColumns}
//                         rowKey={(record) => record.payer}
//                         pagination={false}
//                         style={{ marginTop: '20px' }}
//                       />
//                     ) : (
//                       <p>No settlements to display</p>
//                     )}
//                   </Card>
//                 </Col>
//               ))}
//             </Row>
//           ) : (
//             <p>No groups to display</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PendingSettle;








import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { notification, Button, Spin, Card, Row, Col, Modal } from 'antd';

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
  const [open, setOpen] = useState(false);
  const [settlements, setSettlements] = useState<any>();
  const [loadingSettlements, setLoadingSettlements] = useState<Record<string, boolean>>({});
  const userId = localStorage.getItem('userId');

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };
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
      const response = await axios.post<any>(
        'https://localhost:7194/api/Expense/Cal',
        { groupId }
      );
      console.log("groupId", response.data)
      // setSettlements((prev) => ({ ...prev, [groupId]: response.data }));
      setSettlements(response.data);

    } catch (error) {
      console.error("Error fetching settlements:", error);
      notification.error({ message: "Error fetching settlements" });
    } finally {
      setLoadingSettlements((prev) => ({ ...prev, [groupId]: false }));
    }
  };

  return (
    <div>
      {loading ? (
        <Spin tip="Loading groups..." />
      ) : (
        <div>
          {groups.length > 0 ? (
            <Row gutter={[16, 16]}>
              {groups.map((group, index) => (
                <Col span={24} key={group._id}>
                  <Card
                    title={group.groupName}
                    extra={
                      <Button
                        className='bg-black text-white'
                        onClick={() => {
                          handleFetchSettlements(group.id)
                          showModal()
                        }}
                        loading={loadingSettlements[group._id]}
                      >
                        Show Settlements
                      </Button>
                    }
                  >

                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <p>No groups to display</p>
          )}
        </div>
      )}
      <Modal
        open={open}
        title="Settlements"
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {settlements?.length > 0 ?
          (settlements?.map((e: any, index: number) => (
            <Card
              key={index}
              type="inner"
              title={`Payer: ${e.payer}`}
              style={{ marginBottom: '16px' }}
            >
              {e?.settlements?.map((detail: any, idx: any) => (
                <p key={idx}>
                  {detail.payee} owes {e.payer} ₹ {detail.amount.toFixed(2)}
                </p>
              ))}
            </Card>
          ))) : (
            <div>No Expenses for settlements</div>
          )}
      </Modal>
    </div>
  );
};

export default PendingSettle;

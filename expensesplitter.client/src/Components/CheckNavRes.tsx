// import React, { useContext, useState, useEffect, useMemo } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Tabs, Tooltip, ConfigProvider, Flex, Button, Segmented, TooltipProps, Image, Modal } from 'antd';
// import { CgProfile } from 'react-icons/cg';
// import { RiLogoutCircleRFill } from 'react-icons/ri';
// import Group from './Group';
// import Splitter from './Splitter';
// import PendingSettle from './PendingSettle';
// import UserContext from './UserContext';
// import { HiUserGroup } from "react-icons/hi2";
// import { AiOutlineSplitCells } from 'react-icons/ai';
// import { MdPendingActions } from 'react-icons/md';
// import { Avatar } from 'evergreen-ui';


// const buttonWidth = 80;
// const CheckNavRes: React.FC = () => {

//   // const [login, setLogin] = useState<any>(false)
//   // const navi = useNavigate();
//   // const nav = useNavigate();

//   const [arrow, setArrow] = useState<'Show' | 'Hide' | 'Center'>('Show');
//   const [r, setR] = useState<any>(false);
//   const navigation = useNavigate()
//   const mergedArrow = useMemo<TooltipProps['arrow']>(() => {
//     if (arrow === 'Hide') {
//       return false;
//     }

//     if (arrow === 'Show') {
//       return true;
//     }

//     return {
//       pointAtCenter: true,
//     };
//   }, [arrow]);

//   useEffect(() => {
//     let user: any = localStorage.getItem("userId")
//     if (user) {
//     }
//     else {
//       navigation("/login")

//     }
//   })
//   const { userData, setUserData } = useContext(UserContext);
//   const navigate = useNavigate();

//   // Safe function to get JSON data from localStorage
//   const getLocalStorageData = (key: string) => {
//     const item = localStorage.getItem(key);
//     try {
//       return item ? JSON.parse(item) : null;
//     } catch (e) {
//       console.error(`Error parsing localStorage data for key "${key}":`, e);
//       return null;
//     }
//   };

//   // Initialize state from localStorage
//   const [username, setUsername] = useState<string | null>(getLocalStorageData('userName'));
//   const [email, setEmail] = useState<string | null>(getLocalStorageData('email'));

//   // Handle user sign out
//   const handleSignOut = () => {
//     localStorage.removeItem('userId');
//     localStorage.removeItem('userName');
//     localStorage.removeItem('email');
//     localStorage.removeItem('selectedGroup')
//     setUserData({ userName: '', email: '' });
//     navigate('/');
//     // window.location.reload();
//   };

  
//   const text = <span style={{ lineHeight: 2 }}>
//     <div style={{ fontSize: 30, paddingLeft: 65 }}>
//       <CgProfile />
//     </div>
//     <p style={{ fontSize: '15px', paddingLeft: 10 }}>{email}</p>
//     <h5 style={{ display: 'flex', paddingLeft: 10 }} onClick={handleSignOut}>
//       <RiLogoutCircleRFill style={{ marginTop: '3px', paddingRight: '5px', fontSize: '25px' }} />
//       <p style={{ fontSize: '18px' }}>SignOut</p>
//     </h5>
//   </span>;

//   useEffect(() => {
//     if (username && email) {
//       setUserData({ userName: username, email });
//     }
//   }, [username, email, setUserData]);



//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   // const userData = {
//   //   userName: 'Alan Turing',
//   // };

//   const buttonWidth = 100;
//   // const text = 'Profile Tooltip';
//   // const mergedArrow = true;

//   return (
//     <div>

// <div className="flex justify-between items-center mt-2 px-6">
//       <h5 className="font-large text-3xl font-bold">SPLITIFY</h5>

//       <ConfigProvider button={{ style: { width: buttonWidth, margin: 4 } }}>
//         <Flex justify="center" align="center" className="demo">
//           <Tooltip placement="bottomLeft">
//             <div className="flex items-center">
//               <Avatar
//                 src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
//                 name={userData.userName}
//                 size={40}
//                 onClick={showModal} // Click event to show the modal
//               />
//             </div>
//           </Tooltip>
//         </Flex>
//       </ConfigProvider>

//       {/* Ant Design Modal */}
//       <Modal
//         title="User Info"
//         centered
//         visible={isModalVisible}
//         onCancel={handleCancel}
//         footer={null} // You can add buttons in the footer if needed
//       >
//         <p>{userData.userName}</p>
//         {/* Add more user info or content here */}
//       </Modal>
//     </div>



//       <Tabs defaultActiveKey="1" style={{ paddingLeft: '10px' }}>
//         <Tabs.TabPane
//           key="1"
//           tab={
//             <span style={{ display: 'flex', paddingTop: '6px', gap: '5px' }}>
//               <HiUserGroup style={{ fontSize: '25px' }} />
//               Create Group
//             </span>
//           }
//         >
//           <Group setR={setR} />
//         </Tabs.TabPane>
//         <Tabs.TabPane key="2" tab={
//           <span style={{ display: 'flex', paddingTop: '6px', gap: '5px' }}>
//             <AiOutlineSplitCells style={{ fontSize: '25px' }} />
//             Split Your Expense
//           </span>
//         }>
//           <Splitter r={r} />
//         </Tabs.TabPane>
//         <Tabs.TabPane key="3" tab={
//           <span style={{ display: 'flex', paddingTop: '6px', gap: '5px' }}>
//             <MdPendingActions style={{ fontSize: '25px' }} />
//             Pending Settlement
//           </span>
//         }>
//           <PendingSettle />
//         </Tabs.TabPane>
//       </Tabs>

//     </div>
//   );
// };

// export default CheckNavRes;


import React, { useContext, useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, Tooltip, ConfigProvider, Flex, Modal, Button } from 'antd';
import { CgProfile } from 'react-icons/cg';
import { RiLogoutCircleRFill } from 'react-icons/ri';
import Group from './Group';
import Splitter from './Splitter';
import PendingSettle from './PendingSettle';
import UserContext from './UserContext';
import { HiUserGroup } from "react-icons/hi2";
import { AiOutlineSplitCells } from 'react-icons/ai';
import { MdPendingActions } from 'react-icons/md';
import { Avatar } from 'evergreen-ui';
import { UserOutlined, MailOutlined } from '@ant-design/icons';

const CheckNavRes: React.FC = () => {
  const [arrow, setArrow] = useState<'Show' | 'Hide' | 'Center'>('Show');
  const [r, setR] = useState<any>(false);
  const navigation = useNavigate();
  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }
    if (arrow === 'Show') {
      return true;
    }
    return { pointAtCenter: true };
  }, [arrow]);

  useEffect(() => {
    let user = localStorage.getItem("userId");
    if (!user) {
      navigation("/login");
    }
  }, [navigation]);

  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const getLocalStorageData = (key: string) => {
    const item = localStorage.getItem(key);
    try {
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error(`Error parsing localStorage data for key "${key}":`, e);
      return null;
    }
  };

  const [username, setUsername] = useState<string | null>(getLocalStorageData('userName'));
  const [email, setEmail] = useState<string | null>(getLocalStorageData('email'));

  const handleSignOut = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('email');
    localStorage.removeItem('selectedGroup');
    setUserData({ userName: '', email: '' });
    navigate('/');
  };

  useEffect(() => {
    if (username && email) {
      setUserData({ userName: username, email });
    }
  }, [username, email, setUserData]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mt-2 px-6">
        <h5 className="font-large text-3xl font-bold">SPLITIFY</h5>

        <ConfigProvider button={{ style: { width: 100, margin: 4 } }}>
          <Flex justify="center" align="center" className="demo">
            <Tooltip placement="bottomLeft">
              <div className="flex items-center">
                <Avatar
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
                  name={userData.userName}
                  size={40}
                  onClick={showModal} 
                />
              </div>
            </Tooltip>
          </Flex>
        </ConfigProvider>

        <Modal
        
          // title="User Info"
          centered
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null} 
        >
          <div className="flex flex-col items-center">
          
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
              name={userData.userName}

              size={100}
              style={{ marginBottom: 16 }}
            />

            {/* User Name */}
            <div className="text-center">
              <h3 className="font-bold text-xl">
                <UserOutlined style={{ marginRight: 8 }} />
                {userData.userName}
              </h3>

              <p className="text-gray-600 mt-2">
                <MailOutlined style={{ marginRight: 8 }} />
                {userData.email}
              </p>
            </div>

            <Button
              type="default"
              
              style={{ marginTop: 20, height:'35px', width: '100%', background:'black' ,color:'white'}}
              onClick={handleSignOut}
            >
              <RiLogoutCircleRFill style={{ marginRight: 8 }} />
              Sign Out
            </Button>
          </div>
        </Modal>
      </div>

      <Tabs defaultActiveKey="1" style={{ paddingLeft: '10px' }}>
        <Tabs.TabPane
          key="1"
          tab={
            <span style={{ display: 'flex', paddingTop: '6px', gap: '5px' }}>
              <HiUserGroup style={{ fontSize: '25px' }} />
              Create Group
            </span>
          }
        >
          <Group setR={setR} />
        </Tabs.TabPane>
        <Tabs.TabPane
          key="2"
          tab={
            <span style={{ display: 'flex', paddingTop: '6px', gap: '5px' }}>
              <AiOutlineSplitCells style={{ fontSize: '25px' }} />
              Split Your Expense
            </span>
          }
        >
          <Splitter r={r} />
        </Tabs.TabPane>
        <Tabs.TabPane
          key="3"
          tab={
            <span style={{ display: 'flex', paddingTop: '6px', gap: '5px' }}>
              <MdPendingActions style={{ fontSize: '25px' }} />
              Pending Settlement
            </span>
          }
        >
          <PendingSettle />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default CheckNavRes;

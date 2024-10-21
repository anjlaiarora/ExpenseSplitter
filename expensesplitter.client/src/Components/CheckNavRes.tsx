import React, { useContext, useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, Tooltip, ConfigProvider, Flex, Button, Segmented, TooltipProps, Image } from 'antd';
import { CgProfile } from 'react-icons/cg';
import { RiLogoutCircleRFill } from 'react-icons/ri';
import Group from './Group';
import Splitter from './Splitter';
import PendingSettle from './PendingSettle';
import UserContext from './UserContext';
import { HiUserGroup } from "react-icons/hi2";
import { AiOutlineSplitCells } from 'react-icons/ai';
import { MdPendingActions } from 'react-icons/md';


const buttonWidth = 80;
const CheckNavRes: React.FC = () => {
  
  // const [login, setLogin] = useState<any>(false)
  // const navi = useNavigate();
  // const nav = useNavigate();

  const [arrow, setArrow] = useState<'Show' | 'Hide' | 'Center'>('Show');

  const mergedArrow = useMemo<TooltipProps['arrow']>(() => {
    if (arrow === 'Hide') {
      return false;
    }

    if (arrow === 'Show') {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  // useEffect(() =>{
  //   if(!login){
  //    navi('/checkNavRes')
  //   }
  //   else{
  //     nav('/')
  //   }
  // })
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  // Safe function to get JSON data from localStorage
  const getLocalStorageData = (key: string) => {
    const item = localStorage.getItem(key);
    try {
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error(`Error parsing localStorage data for key "${key}":`, e);
      return null;
    }
  };

  // Initialize state from localStorage
  const [username, setUsername] = useState<string | null>(getLocalStorageData('userName'));
  const [email, setEmail] = useState<string | null>(getLocalStorageData('email'));

  // Handle user sign out
  const handleSignOut = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('email');
    localStorage.removeItem('selectedGroup')
    setUserData({ userName: '', email: '' }); 
    navigate('/');
    // window.location.reload();
  };

  // const userInfoTooltip = (
  //   <span style={{marginRight:'1200px'}}>
  //     <div style={{ fontSize: 30 , paddingLeft:50}}>
  //       <CgProfile />
  //     </div>
  //     <p style={{ fontSize: '15px', paddingLeft: 50}}>{email}</p>
  //     <h5 style={{ fontSize: '18px', display:'flex' }} onClick={handleSignOut}>
  //       <RiLogoutCircleRFill style={{ marginTop: '3px', paddingRight: '2px' }} />
  //       <p>SignOut</p>
  //     </h5>
  //   </span>
  // );/
  const text =  <span style={{lineHeight:2}}>
  <div style={{ fontSize: 30 , paddingLeft:65}}>
    <CgProfile />
  </div>
  <p style={{ fontSize: '15px', paddingLeft: 10}}>{email}</p>
  <h5 style={{ display:'flex',  paddingLeft: 10 }} onClick={handleSignOut}>
    <RiLogoutCircleRFill style={{ marginTop: '3px', paddingRight: '5px',fontSize: '25px' }} />
    <p style={{fontSize: '18px'}}>SignOut</p>
  </h5>
  </span>;

  useEffect(() => {
    if (username && email) {
      setUserData({ userName: username, email });
    }
  }, [username, email, setUserData]);

  return (
    <div>
      <div className="flex flex-row mt-2">
        <h5 className="pl-6 font-medium text-3xl">SPLITIFY</h5>
        {/* <ConfigProvider>
        <Flex vertical justify="center" align="center" className="demo">
        <Flex justify="center" align="center" style={{ whiteSpace: 'nowrap' }}>
            <Tooltip placement="bottom" title={userInfoTooltip}>
              <div style={{ fontSize: 38 , paddingLeft:'1300px'}}>
                <CgProfile />
              </div>
            </Tooltip>
            <p className="pt-4 fs-5 pe-4">{userData.userName}</p>
            </Flex> 
          </Flex>
        </ConfigProvider> */}
        <ConfigProvider button={{ style: { width: buttonWidth, margin: 4} }}>
      <Flex vertical justify="center" align="center" className="demo" style={{marginLeft:'1300px'}}>
        <Flex justify="center" align="center" style={{ whiteSpace: 'nowrap' }}>
          
          <Tooltip placement="bottomLeft" title={text} arrow={mergedArrow}>
            <div style={{fontSize:'30px'}}><CgProfile /></div>
          </Tooltip>
          <p style={{paddingLeft:'5px'}}>{userData.userName}</p>
        </Flex>
      </Flex>
    </ConfigProvider>
      </div>
      <Tabs defaultActiveKey="1" style={{paddingLeft:'10px'}}>
      <Tabs.TabPane 
        key="1" 
        tab={
          <span style={{display:'flex',paddingTop:'6px',gap:'5px'}}>
           <HiUserGroup style={{ fontSize:'25px'}}/>
            {/* <Image src='./group.png' preview={false} style={{ width: '20px', height: '20px', marginRight: '8px' }} /> */}
            Create Group
          </span>
        }
      >
        <Group />
      </Tabs.TabPane>
      <Tabs.TabPane key="2" tab={
        <span style={{display:'flex', paddingTop:'6px',gap:'5px'}}>
          <AiOutlineSplitCells style={{fontSize:'25px'}}/>
        Split Your Expense
        </span>
      }>
        <Splitter />
      </Tabs.TabPane>
      <Tabs.TabPane key="3" tab={
        <span style={{display:'flex', paddingTop:'6px',gap:'5px'}}>
          <MdPendingActions style={{fontSize:'25px'}}/>
          Pending Settlement
        </span>
        }>
        <PendingSettle />
      </Tabs.TabPane>
    </Tabs>
      
    </div>
  );
};

export default CheckNavRes;


import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Group from './Group';
import Splitter from './Splitter';
import PendingSettle from './PendingSettle';
import { CgProfile } from 'react-icons/cg';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import UserContext from './UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { RiLogoutCircleRFill } from 'react-icons/ri';
import axios from 'axios';


const onChange = (key: string) => {
  console.log(key);
  
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Create Group',
    children: <Group/>,

  },
  {
    key: '2',
    label: 'Split Your Expenses',
    children: <Splitter/>,
  },
  {
    key: '3',
    label: 'Pending Settlement',
    children: <PendingSettle/>
   
  },
];
const CheckNavRes = () => {
  const {setLogin} = useContext(UserContext)
  
  const nav1 = useNavigate();
   const user: any = localStorage.getItem('userName') || '';
  const handleprofile = () => {
    localStorage.removeItem("userId")
    localStorage.removeItem('userName')

    //add the line
    localStorage.removeItem('email')
    localStorage.removeItem('selectedGroup')
    
    nav1('/login');
    window.location.reload()
  }
  
  const popover =(
    <Popover>
        <Popover.Body  >
            <span className='d-block btn d-flex' onClick={()=>{
              setLogin(false)
            }}><h5 className='d-flex flex-row'  onClick={handleprofile}><RiLogoutCircleRFill className='mt-1'/><p className='ps-2'>Logout</p></h5></span>
        </Popover.Body>
    </Popover>
    )
  
    return (
     
      <>
      <div className='d-flex flex-row justify-content-between'>
        <h5 className='ps-4 pt-4 fs-2'>Splitify</h5>
      <OverlayTrigger trigger="click" placement='bottom' overlay={popover}>    
           <div className='d-flex flex-row'>
        <div className="float-end"><CgProfile /></div>
        <p className=''>{user}</p>
            </div> 
        </OverlayTrigger>
      </div>
      <div style={{paddingLeft:"20px"}}>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
     </>



        
      );
    }

export default CheckNavRes


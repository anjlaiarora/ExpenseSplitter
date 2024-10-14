
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Group from './Group';
import Splitter from './Splitter';


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
    children: 'Panding Settlement',
   
  },
];
const CheckNavRes = () => {
   
  
    return (
     
      <>
      <div style={{padding:"20px"}}>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
     </>



        
      );
    }

export default CheckNavRes


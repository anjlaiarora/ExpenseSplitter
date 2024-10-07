// import { Card, InputNumber, InputNumberProps, Modal, Steps } from "antd";
// import TextArea from "antd/es/input/TextArea";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom"
// import Group from "./Group";
// import NavbarCom from "./NavbarCom";

// const Splitter = () => {
//   const nevigate = useNavigate();
//   const handleClick = () => {
//     nevigate('/')
//   }
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//     setValue("")
//     // setCurrent(0)
//   }
//   const [current, setCurrent] = useState(0);

//   const onChange = (value: number) => {
//     console.log('onChange:', value);
//     setCurrent(value);
//   };
//   const onChanges: InputNumberProps['onChange'] = (value) => {
//     console.log('changed', value);
//   };
//   const [value, setValue] = useState('');

//   return (

//     <div>
//       <NavbarCom/>
//       {/* <h2 onClick={handleClick} className="text-primary text-center pe-5 pt-5">Splitify<img src='https://cdn-icons-png.freepik.com/512/8436/8436281.png' width={40} className="ps-1" /></h2> */}
//       <div className="d-flex flex-row justify-content-center justify-content-evenly p-5">
//         <div className="w-25">
//           <Card>
//           <h5>Expense</h5>
//           <Group/>
//           </Card>
//         </div>
//         <Card className="bg-secondary w-25 text-center">
//           <h5 className="text-light">SPLIT EXPENSES</h5>
//           <div className="d-flex flex-row justify-content-between mt-5">
//             <Card className="w-50 text-center me-2 pt-4">
//               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaR4rSWlR5dnMCXXlCONwjy1MGVcUKalxLerpbJpcMm-xGmt0ro-Z6COeKrzDn-e2wuvw&usqp=CAU" width={50} onClick={showModal} />
//               <p className="pt-4">Equally</p>
//               <Modal title="Split Evenly" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
//                 <Steps
//                   direction="vertical"
//                   current={current}
//                   // onChange={onChanges}  
//                   items={[
//                     {
//                       title: 'What was the Expenses Name?',
//                       description: <TextArea
//                       value={value}
//                       onChange={(e) => setValue(e.target.value)}
//                       placeholder="Expense Name"
//                       autoSize
//                     />
//                     },
//                     // {
//                     //   title:'Enter Amount',
//                     //   description:<TextArea
//                     //   // rules={[{ required: true, message: 'Please input!' }]}/>
//                     // },
//                     {
//                       title: 'Enter Amount',
//                      description:<InputNumber<string>
//                      style={{ width: 250 }}
//                      placeholder="Amount"
//                      onChange={onChanges}
//                      stringMode
//                    />
//                     },
                  
//                   ]}
//                 />
//               </Modal>
//             </Card>
//             <Card className="w-50 text-center me-2">
//               <img src="./download.png" width={100} onClick={showModal} />
//               <p className="">Custom</p>
//               <Modal title="Split Evenly" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
//                 <Steps
//                   direction="vertical"
//                   current={current}
//                   onChange={onChange}
//                   items={[
//                     {
//                       title: 'What was the Expenses Name?',
//                       description: <TextArea
//                       value={value}
//                       onChange={(e) => setValue(e.target.value)}
//                       placeholder="Expense Name"
//                       autoSize
//                     />
//                     },
//                     {
//                       title: 'Enter Amount',
//                      description:<InputNumber<string>
//                      style={{ width: 250 }}
//                      placeholder="Amount"
//                      onChange={onChanges}
//                      stringMode
//                    />
//                     },
                  
//                   ]}
//                 />
//               </Modal>
//             </Card>
//           </div>
//           <Card className="w-50 mt-2 ms-auto me-auto">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaR4rSWlR5dnMCXXlCONwjy1MGVcUKalxLerpbJpcMm-xGmt0ro-Z6COeKrzDn-e2wuvw&usqp=CAU" width={50} />
//             <p className="pt-1">Even</p>
//           </Card>
//         </Card>
//         <div className="w-25">
//           <h5>Pending Settlement</h5>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Splitter

import { Card, Modal, Steps, InputNumber, Input, Button, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Group from "./Group";
import NavbarCom from "./NavbarCom";
import axios from "axios";

interface Groups {
  _id: string;
  groupName: string;
}

const Splitter: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);
  const [groups, setGroups] = useState<Groups[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [expenseName, setExpenseName] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [splitMethod, setSplitMethod] = useState<"Equally" | "Custom" | "">(""); // Split method type

  const navigate = useNavigate();

  // Fetch all groups on component mount
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get<Group[]>("https://localhost:7194/api/Group");
        setGroups(response.data);
      } catch (error) {
        console.error("Error fetching groups", error);
      }
    };
    fetchGroups();
  }, []);

  const showModal = (method: "Equally" | "Custom") => {
    setSplitMethod(method);
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    // Create the expense
    if (expenseName && amount && selectedGroup) {
      try {
        const newExpense = {
          expenseName,
          amount,
          groupId: selectedGroup,
          splitMethod,
        };
        await axios.post("https://localhost:7194/api/Expense", newExpense);
        setIsModalOpen(false);
        setExpenseName("");
        setAmount(0);
        setCurrent(0);
      } catch (error) {
        console.error("Error creating expense", error);
      }
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setExpenseName("");
    setAmount(0);
    setCurrent(0);
  };

  const onStepChange = (value: number) => {
    setCurrent(value);
  };

  return (
    <div>
      <NavbarCom />
      <div className="d-flex flex-row justify-content-center justify-content-evenly p-5">
        {/* Group Creation */}
        <div className="w-25">
          <Card>
            <h5>Expense</h5>
            <Group />
          </Card>
        </div>

        {/* Split Expense Section */}
        <Card className="bg-secondary w-25 text-center">
          <h5 className="text-light">SPLIT EXPENSES</h5>
          <div className="d-flex flex-row justify-content-between mt-5">
            {/* Equally Split Card */}
            <Card className="w-50 text-center me-2 pt-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaR4rSWlR5dnMCXXlCONwjy1MGVcUKalxLerpbJpcMm-xGmt0ro-Z6COeKrzDn-e2wuvw&usqp=CAU"
                width={50}
                onClick={() => showModal("Equally")}
                alt="Equally Split"
              />
              <p className="pt-4">Equally</p>

              {/* Modal for Equally Split */}
              <Modal
                title="Split Evenly"
                open={isModalOpen && splitMethod === "Equally"}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Steps
                  direction="vertical"
                  current={current}
                  onChange={onStepChange}
                  items={[
                    {
                      title: "What was the Expense Name?",
                      description: (
                        <TextArea
                          value={expenseName}
                          onChange={(e) => setExpenseName(e.target.value)}
                          placeholder="Expense Name"
                          autoSize
                        />
                      ),
                    },
                    {
                      title: "Enter Amount",
                      description: (
                        <InputNumber
                          style={{ width: 250 }}
                          value={amount}
                          onChange={(value) => setAmount(value || 0)}
                          placeholder="Amount"
                        />
                      ),
                    },
                    {
                      title: "Select Group",
                      description: (
                        <Select
                          onChange={(value) => setSelectedGroup(value)}
                          value={selectedGroup}
                          style={{ width: "100%" }}
                        >
                          {groups.map((group) => (
                            <Select.Option key={group._id} value={group._id}>
                              {group.groupName}
                            </Select.Option>
                          ))}
                        </Select>
                      ),
                    },
                  ]}
                />
              </Modal>
            </Card>

            {/* Custom Split Card */}
            <Card className="w-50 text-center me-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaR4rSWlR5dnMCXXlCONwjy1MGVcUKalxLerpbJpcMm-xGmt0ro-Z6COeKrzDn-e2wuvw&usqp=CAU"
                width={50}
                onClick={() => showModal("Custom")}
                alt="Custom Split"
              />
              <p className="pt-4">Custom</p>

              {/* Modal for Custom Split */}
              <Modal
                title="Split Custom"
                open={isModalOpen && splitMethod === "Custom"}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Steps
                  direction="vertical"
                  current={current}
                  onChange={onStepChange}
                  items={[
                    {
                      title: "What was the Expense Name?",
                      description: (
                        <TextArea
                          value={expenseName}
                          onChange={(e) => setExpenseName(e.target.value)}
                          placeholder="Expense Name"
                          autoSize
                        />
                      ),
                    },
                    {
                      title: "Enter Amount",
                      description: (
                        <InputNumber
                          style={{ width: 250 }}
                          value={amount}
                          onChange={(value) => setAmount(value || 0)}
                          placeholder="Amount"
                        />
                      ),
                    },
                    {
                      title: "Select Group",
                      description: (
                        <Select
                          onChange={(value) => setSelectedGroup(value)}
                          value={selectedGroup}
                          style={{ width: "100%" }}
                        >
                          {groups.map((group) => (
                            <Select.Option key={group._id} value={group._id}>
                              {group.groupName}
                            </Select.Option>
                          ))}
                        </Select>
                      ),
                    },
                  ]}
                />
              </Modal>
            </Card>
          </div>
          <Card className="w-50 mt-2 ms-auto me-auto">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaR4rSWlR5dnMCXXlCONwjy1MGVcUKalxLerpbJpcMm-xGmt0ro-Z6COeKrzDn-e2wuvw&usqp=CAU" width={50} />
            <p className="pt-1">Groups</p>
          </Card>
        </Card>

        {/* Pending Settlement Section */}
        <div className="w-25">
          <h5>Pending Settlement</h5>
        </div>
      </div>
    </div>
  );
};

export default Splitter;

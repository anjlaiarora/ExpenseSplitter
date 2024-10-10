

import { Card, Modal, Steps, InputNumber, Input, Button, Select, notification } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Group from "./Group";
import NavbarCom from "./NavbarCom";
import axios from "axios";
import { ExpenseType } from "../common/Enum";

interface Groups {
  _id: string;
  groupName: string;
}

const Splitter: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);
  const [groups, setGroups] = useState<Groups[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedOpGroup, setSelectedOpGroup] = useState<any>(null);

  const [expenseName, setExpenseName] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [payer, setPayer] = useState<string>("");
  const [splitMethod, setSplitMethod] = useState<"Equally" | "Custom" | "">(""); // Split method type

  const userId: any = JSON.parse(localStorage.getItem('userId') || '');

  const navigate = useNavigate();

  // Fetch all groups on component mount
  useEffect(() => {
    const fetchGroups = async () => {

      try {
        const response = await axios.get<any>(`https://localhost:7194/api/Group?ownerId=${userId}`);
        setGroups(response.data);
        let data:any = response?.data?.map((e:any)=>{
          return {
            label:e?.groupName,
            value:e?.id,
            member:e?.members
          }
        })
        // console.log("data",response);
        
        setSelectedOpGroup(data)
      } catch (error) {
        notification.error({ message: "Error fetching groups" });
      }
    };
    fetchGroups();
  }, [userId]);


  const showModal = (method: "Equally" | "Custom") => {
    setSplitMethod(method);
    setIsModalOpen(true);
  };

  
  const handleOk = async () => {
    
    if (expenseName && amount &&  payer &&selectedGroup) {
    
      try {
        const newExpense = {
          expenseName,
          amount,
          payer,
          groupId: selectedGroup,
          splitMethod,
          
        };
        await axios.post("https://localhost:7194/api/Expense", newExpense);
        setIsModalOpen(false);
        setExpenseName("");
        setAmount(0);
        setPayer("");
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
                      title: "Select Group type",
                      description: (
                        <Select
                          options={[
                            {
                              value:ExpenseType.Equal,
                              label:"Equal"
                            },
                            {
                              value:ExpenseType.Custom,
                              label:"Custom"
                            }
                          ]}
                          onSelect={(value,record) => {
                            setSelectedGroup(value)
                            console.log("recordhtyut5t",record);
                            
                          }}
                          // value={selectedGroup}
                          style={{ width: "100%" }}
                        >
                          {/* {groups.map((group) => (
                            <Select.Option key={group._id} value={group._id}>
                              {group.groupName}
                            </Select.Option>
                          ))} */}
                        </Select>
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
                          options={selectedOpGroup}
                          onSelect={(value,record) => {
                            setSelectedGroup(value)

                            console.log("record",record);
                            
                          }}
                          // value={selectedGroup}
                          style={{ width: "100%" }}
                        >
                          {/* {groups.map((group) => (
                            <Select.Option key={group._id} value={group._id}>
                              {group.groupName}
                            </Select.Option>
                          ))} */}
                        </Select>
                      ),
                    },


                    {
                      title: "Enter the payer",
                      description: (
                        <TextArea
                          value={payer}
                          onChange={(e) => setPayer(e.target.value)}
                          placeholder="Enter the payer"
                          autoSize
                        />
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

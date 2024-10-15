



import { Card, Modal, Steps, InputNumber, Input, Button, Select, notification, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState, useEffect, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
// import NavbarCom from "./NavbarCom";
import axios from "axios";
import { ExpenseType } from "../common/Enum";
import Group from "./Group";
// import form from "antd/es/form";

interface Groups {
  members: SetStateAction<string[]>;
  _id: string;
  groupName: string;
  ownerId: string;

}

const Splitter: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);

  const [groups, setGroups] = useState<Groups[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedOpGroup, setSelectedOpGroup] = useState<any>(null);
  const [groupMembers, setGroupMembers] = useState<string[]>([]); 
  const [expType, setExpType] = useState<ExpenseType>(); 
  const [expenseName, setExpenseName] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [payer, setPayer] = useState<string>("");
  const [splitMethod, setSplitMethod] = useState<"Equally" | "Custom" | "">(""); 

  const [customAmounts, setCustomAmounts] = useState<{ [key: string]: number }>({});

  const userId: any = localStorage.getItem('userId') || '';

  const navigate = useNavigate();

  // Fetch all groups on component mount
  useEffect(() => {
    const fetchGroups = async () => {

      try {
        const response = await axios.get<Group[]>(`https://localhost:7194/api/Group?ownerId=${userId}`);
        console.log("response",response);
        
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
    if (expenseName && amount && payer && selectedGroup) {
      try {
        const newExpense: any = {
          expenseName,
          TotalAmount: amount,
          payer,
          groupId: selectedGroup,
          SplitType: expType === ExpenseType.Equal ? 0 : 1, 
        };

        if (expType === ExpenseType.Equal) {
          let equalLoop = groupMembers.map((e) => {
            return {
              name: e,
              Amount: amount / groupMembers.length,
            };
          });
          newExpense.Friends = equalLoop;
        } else if (expType === ExpenseType.Custom) {
          const customSplit = groupMembers.map((member) => {
            return {
              name: member,
              Amount: customAmounts[member] || 0, 
            };
          });
          newExpense.Friends = customSplit;
        }

        await axios.post("https://localhost:7194/api/Expense", newExpense);
        setIsModalOpen(false);

        setExpenseName("");
        setAmount(0);
        setPayer("");
        setCurrent(0);
        message.success('Expense added successfully');
      } catch (error) {
        console.error("Error adding expense", error);
      }
    }
  };

  const handleCancel = () => { 
    setIsModalOpen(false);
  };

  const handleCustomAmountChange = (member: string, value: number) => {
    setCustomAmounts({ ...customAmounts, [member]: value });
  };

  const steps = [
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
            { value: ExpenseType.Equal, label: "Equally" },
            { value: ExpenseType.Custom, label: "Custom" },
          ]}
          onSelect={(value) => setExpType(value)}
          style={{ width: "100%" }}
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
          options={selectedOpGroup}
          onSelect={(value, record) => {
            setSelectedGroup(value);
            setGroupMembers(record?.member);
          }}
          
          style={{ width: "100%" }}
          
        />
        
      ),
      
      
    },
    
    {
      title: "Select Payer",
      description: (
        <Select
          options={groupMembers.map(member => ({
            label: member,
            value: member,
          }))}
          onSelect={setPayer}
          style={{ width: "100%" }}
        />
      ),
    }
  ];

  if (expType === ExpenseType.Custom) {
    steps.push({
      title: "Custom Amounts",
      description: (
        <div>
          {groupMembers.map(member => (
            <div key={member} className="mb-2">
              <label>{member}'s share</label>
              <InputNumber
                min={0}
                value={customAmounts[member] || 0} 
                onChange={(value) => handleCustomAmountChange(member, value || 0)}
              />
            </div>
          ))}
        </div>
      ),
    });
  }

  return (
    <div>
      {/* <div> */}
      <div className="d-flex flex-row justify-content-center justify-content-evenly p-5 ">
        {/* Split Expense Section */}
        <div className="bg-light w-100 text-start pb-5 ps-2 pe-2">
          <div className="d-flex flex-row justify-content-between mt-5">
          <h5 className="text-dark">SPLIT EXPENSES</h5>
            {/* Split Expense Button */}
            <Button
              type="primary"
              className="text-center rounded-5 bg-black ps-5 pe-5"
              onClick={() => showModal("Equally")}
            >
              Split
            </Button>
          
              {/* Modal for Equally and Custom Split */}
              <Modal
                title={`Split ${splitMethod === "Equally" || splitMethod === "Custom"}`}
                // open={isModalOpen && (splitMethod === "Equally" || splitMethod === "Custom")}
                open={isModalOpen}
                onOk={handleOk}
                // onOk={()=>handleOk()}

                onCancel={handleCancel}
              >
                <Steps
                  direction="vertical"
                  current={current}
                  // onChange={onStepChange}
                  items={steps}
                />
              </Modal>
            {/* </Card> */}
          </div>          
        {/* </Card> */}

        {/* Pending Settlement Section */}
        {/* <div className="w-25">
          <h5>Pending Settlement</h5>
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default Splitter;

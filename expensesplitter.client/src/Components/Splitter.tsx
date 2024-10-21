import { Card, Modal, Steps, InputNumber, Input, Button, notification, message, Table } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState, useEffect, SetStateAction } from "react";
import { Select } from 'antd';
import axios from "axios";
import { ExpenseType } from "../common/Enum";
import Group from "./Group";
import form from "antd/es/form";



export interface Groups {
  id: any;
  members: SetStateAction<string[]>;
  _id: string;
  groupName: string;
  ownerId: string;
  
}

export interface Expense {
  groupId: any;
  expenseName: string;
  TotalAmount: number;
  payer: string;
}

const Splitter: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);
  const [groups, setGroups] = useState<Groups[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<any>(null);
  const [selectedOpGroup, setSelectedOpGroup] = useState<any>(null);
  const [groupMembers, setGroupMembers] = useState<string[]>([]);
  const [expType, setExpType] = useState<ExpenseType>();
  const [expenseName, setExpenseName] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [payer, setPayer] = useState<string>("");
  const [splitMethod, setSplitMethod] = useState<"Equally" | "Custom" | "">("");
  const [customAmounts, setCustomAmounts] = useState<{ [key: string]: number }>({});
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>([]); 
  const userId: any = localStorage.getItem('userId') || '';

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get<Group[], any>(`https://localhost:7194/api/Group?ownerId=${userId}`);
        setGroups(response.data);
        let data: any = response?.data?.map((e: any) => ({
          label: e?.groupName,
          value: e?.id,
          member: e?.members,
          // amount : e?.amount

        }));
        setSelectedOpGroup(data);


        const savedGroupId = localStorage.getItem('selectedGroup');
        if (savedGroupId) {
          setSelectedGroup(savedGroupId);
        } else if (response.data.length > 0) {
          const firstGroupId = response.data[0].id;
          setSelectedGroup(firstGroupId);
          localStorage.setItem('selectedGroup', firstGroupId);
        }

      } catch (error) {
        notification.error({ message: "Error fetching groups" });
      }
    };
    fetchGroups();
  }, [userId]);

  const fetchExpenses = async () => {
    if (selectedGroup) {
      try {
        const response = await axios.get<Expense[]>(`https://localhost:7194/api/Expense/${selectedGroup}`);
      
        setExpenses(response.data);
      } catch (error) {
        notification.error({ message: "Error fetching expenses" });
      }
    }
  };
  useEffect(() => {
    fetchExpenses();
  }, [selectedGroup]);

  useEffect(() => {

    const filtered = expenses.filter((expense) => expense.groupId === selectedGroup);
    setFilteredExpenses(filtered);
  }, [selectedGroup, expenses]);

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
        newExpense.Friends = groupMembers.map((e) => ({
          name: e,
          Amount: amount / groupMembers.length,
        }));
      }
      else if (expType === ExpenseType.Custom) {
        const customSplit = groupMembers.map((member) => ({
          name: member,
          Amount: customAmounts[member] || 0,
        }));
        newExpense.Friends = customSplit;

        const totalCustomAmount = customSplit.reduce((total, member) => total + member.Amount, 0);
        
        if (totalCustomAmount !== amount) {
          notification.error({
            message: "Custom amounts do not match the total expense amount",
            description: `Total custom amounts: ${totalCustomAmount}, expected: ${amount}`,
          });
          return;
        }
      }

      // Save the expense if validation passes
      await axios.post("https://localhost:7194/api/Expense", newExpense);

      // Update expenses list with the new expense
      setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
      setIsModalOpen(false);
      setExpenseName("");
      setAmount(0);
      setPayer("");
      setCurrent(0);
      fetchExpenses()
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

          onInput={(e: any) => e.target.value = e.target.value.length > 1 ? e.target.value : e.target.value.toUpperCase()}
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

          type="number"
          style={{ width: 250 }}
          value={amount}
          onChange={(value) => setAmount(value || 0)}
          placeholder="Amount"
          required
          min={0}
          
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
            localStorage.setItem('selectedGroup', value);
          }}
          style={{ width: "100%" }}
          value={selectedGroup}
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
      <Select
        mode="multiple"
        placeholder="Select Group"
        style={{ width: '20%' }}
        onSelect={(value) => {
          setSelectedGroup(value);
          localStorage.setItem('selectedGroup', value);
        }}
        options={groups.map((group) => ({
          label: group.groupName,
          value: group.id,
        }))}
        value={selectedGroup}
      />

      <div className="d-flex flex-row justify-content-center justify-content-evenly p-5">
        <div className="bg-light w-100 text-start pb-5 ps-2 pe-2">
          <div className="d-flex flex-row justify-content-between mt-5">
            <h5 className="text-dark">SPLIT EXPENSES</h5>
            <Button
              type="primary"
              className="text-center rounded-5 bg-black ps-5 pe-5"
              onClick={() => showModal("Equally")}
            >
              Split
            </Button>

            <Modal
              title={`Split ${splitMethod === "Equally" || splitMethod === "Custom"}`}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Steps
                direction="vertical"
                current={current}
                items={steps}
              />
            </Modal>

            <Table
              dataSource={filteredExpenses} 
              columns={[
                {
                  title: 'Expense Name',
                  dataIndex: 'expenseName',
                  key: 'expenseName',
                },
                {
                  title: 'Total Amount',
                  dataIndex: 'totalAmount',
                  key: 'totalAmount',
                },
                {
                  title: 'Payer',
                  dataIndex: 'payer',
                  key: 'payer',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splitter;





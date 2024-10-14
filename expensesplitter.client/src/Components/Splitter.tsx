import { Button, Modal, InputNumber, Select, Radio, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState, useEffect } from "react";
import axios from "axios";

interface Groups {
  _id: string;
  groupName: string;
}

const Splitter: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [groups, setGroups] = useState<Groups[]>([]);
  const [form] = Form.useForm();

  // Fetch all groups on component mount
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get<Groups[]>("https://localhost:7194/api/Group");
        setGroups(response.data);
      } catch (error) {
        console.error("Error fetching groups", error);
      }
    };
    fetchGroups();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    form.validateFields().then(async (values) => {
      const { expenseName, amount, splitMethod, selectedGroup, selectPayer } = values;
      try {
        const newExpense = {
          expenseName,
          amount,
          groupId: selectedGroup,
          splitMethod,
          payer: selectPayer,
        };
        await axios.post("https://localhost:7194/api/Expense", newExpense);
        setIsModalOpen(false);
        form.resetFields();
      } catch (error) {
        console.error("Error creating expense", error);
      }
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <div>
      <div className="d-flex flex-row justify-content-center justify-content-evenly p-5 ">
        {/* Split Expense Section */}
        <div className="bg-light w-100 text-start pb-5 ps-2 pe-2">
          <div className="d-flex flex-row justify-content-between mt-5">
          <h5 className="text-dark">SPLIT EXPENSES</h5>
            {/* Split Expense Button */}
            <Button
              type="primary"
              className="text-center rounded-5 bg-black ps-5 pe-5"
              onClick={showModal}
            >
              Split
            </Button>

            {/* Split Expense model*/}
            <Modal
              title="Split Expense"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Form
                form={form}
                layout="vertical"
                initialValues={{
                  splitMethod: "Equally", 
                }}
              >
                <Form.Item
                  label="Expense Name"
                  name="expenseName"
                  rules={[{ required: true, message: "Please input the expense name!" }]}
                >
                  <TextArea placeholder="Enter Expense Name" autoSize />
                </Form.Item>

                <Form.Item
                  label="Expense Amount"
                  name="amount"
                  rules={[{ required: true, message: "Please input the amount!" }]}
                >
                  <InputNumber
                    style={{ width: "100%" }}
                    placeholder="Enter Amount"
                  />
                </Form.Item>

                <Form.Item
                  label="Select Expense Type"
                  name="splitMethod"
                  rules={[{ required: true, message: "Please select a split method!" }]}
                >
                  <Radio.Group>
                    <Radio value="Equally">Equally</Radio>
                    <Radio value="Custom">Custom</Radio>
                  </Radio.Group>
                </Form.Item>

                <Form.Item
                  label="Select Group"
                  name="selectedGroup"
                  rules={[{ required: true, message: "Please select a group!" }]}
                >
                  <Select placeholder="Select a Group">
                    {groups.map((group) => (
                      <Select.Option key={group._id} value={group._id}>
                        {group.groupName}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Select Payer"
                  name="selectPayer"
                  rules={[{ required: true, message: "Please select a payer!" }]}
                >
                  <Select placeholder="Select Payer">
                    {/* Add logic here to populate the payers based on the selected group */}
                    <Select.Option value="User1">User1</Select.Option>
                    <Select.Option value="User2">User2</Select.Option>
                  </Select>
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splitter;

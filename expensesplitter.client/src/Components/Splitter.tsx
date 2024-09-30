import { Card, InputNumber, InputNumberProps, Modal, Steps } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Splitter = () => {
  const nevigate = useNavigate();
  const handleClick = () => {
    nevigate('/')
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  }
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  const onChanges: InputNumberProps['onChange'] = (value) => {
    console.log('changed', value);
  };
  const [value, setValue] = useState('');

  return (

    <div>
      <h2 onClick={handleClick} className="text-primary text-center pe-5 pt-5">Splitify<img src='https://cdn-icons-png.freepik.com/512/8436/8436281.png' width={40} className="ps-1" /></h2>
      <div className="d-flex flex-row justify-content-center justify-content-evenly p-5">
        <div className="">
          <h5>Expense</h5>
        </div>
        <Card className="bg-secondary w-25 text-center">
          <h5 className="text-light">SPLIT EXPENSES</h5>
          <div className="d-flex flex-row justify-content-between mt-5">
            <Card className="w-50 text-center me-2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaR4rSWlR5dnMCXXlCONwjy1MGVcUKalxLerpbJpcMm-xGmt0ro-Z6COeKrzDn-e2wuvw&usqp=CAU" width={50} onClick={showModal} />
              <p className="pt-2">Even</p>
              <Modal title="Split Evenly" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Steps
                  direction="vertical"
                  current={current}
                  onChange={onChange}
                  items={[
                    {
                      title: 'What was the Expenses?',
                      description: <TextArea
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      placeholder="Expense Name"
                      autoSize
                    />
                    },
                    {
                      title: 'In Progress',
                     description:<InputNumber<string>
                     style={{ width: 250 }}
                     placeholder="Amount"
                     onChange={onChanges}
                     stringMode
                   />
                    },
                    {
                      title: 'Waiting',
                      description: "<input>First Name</input>",
                    },
                  ]}
                />
              </Modal>
            </Card>
            <Card className="w-50 text-center ms-2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaR4rSWlR5dnMCXXlCONwjy1MGVcUKalxLerpbJpcMm-xGmt0ro-Z6COeKrzDn-e2wuvw&usqp=CAU" width={50} />
              <p className="pt-2">Uneven</p>
            </Card>
          </div>
          <Card className="w-50 mt-2 ms-auto me-auto">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaR4rSWlR5dnMCXXlCONwjy1MGVcUKalxLerpbJpcMm-xGmt0ro-Z6COeKrzDn-e2wuvw&usqp=CAU" width={50} />
            <p className="pt-1">Even</p>
          </Card>
        </Card>
        <div className="">
          <h5>Pending Settlement</h5>
        </div>

      </div>
    </div>
  )
}

export default Splitter
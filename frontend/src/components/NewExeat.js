import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button, Form, Input, DatePicker } from "antd";
import { addBook } from "../actions/bookingsActions";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

function NewExeat() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [depTime, setDeptTime] = useState("");
  const [returnTime, setReturn] = useState("");
  const [reason, setReason] = useState("");

  const [isModalShow, setIsModalShow] = useState(false);

  const onToggleModal = () => {
    setIsModalShow(!isModalShow);
  };

  const submitHandler = () => {
    const newbook = {
      name,
      destination,
      depTime,
      returnTime,
      reason,
    };
    dispatch(addBook(newbook));
    if (newbook) {
      onToggleModal()
    }
    console.log(newbook);
  };

  return (
    <div className="container">
      <div>
        <div>
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat magni architecto vero asperiores tempore
          illo? Ducimus molestiae facilis delectus dolores quam itaque assumenda blanditiis porro esse? Voluptatum id
            necessitatibus sapiente!</h3>
        </div>
        <Button onClick={onToggleModal}>BOOK NEW EXEAT</Button>
      </div>
      
      <Modal
        title="NEW EXEAT BOOKING"
        visible={isModalShow}
        onCancel={onToggleModal}
        onOk={onToggleModal}
      >
        <Form {...layout} onSubmit={submitHandler}>
          <Form.Item label="Full name">
            <Input
              placeholder="enter fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Destination">
            <Input
              placeholder="enter destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Departure date/time">
            <Input
              placeholder="enter departure time"
              value={depTime}
              onChange={(e) => setDeptTime(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Returning date/time">
            <Input
              placeholder="enter returning time"
              value={returnTime}
              onChange={(e) => setReturn(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Describe reason">
            <Input.TextArea
              placeholder="enter reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="submit" onClick={submitHandler} type="primary">
              ADD TO BOOKINGS
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default NewExeat;

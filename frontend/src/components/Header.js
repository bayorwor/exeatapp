import { useState } from "react";
import { Menu } from "antd";
import { PlusCircleFilled, BookFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [current, setCurrent] = useState("bookings");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      style={{ marginBottom: 20 }}
    >
      <Menu.Item key="bookings" icon={<BookFilled />}>
        <Link to="/">ALL BOOKINGS</Link>
      </Menu.Item>
      <Menu.Item key="add" icon={<PlusCircleFilled />}>
        <Link to="/newexeat">ADD</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;

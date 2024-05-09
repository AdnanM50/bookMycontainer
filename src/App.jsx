import { Button, Drawer } from "antd";
import "./app.css";
import { TiHomeOutline } from "react-icons/ti";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { GrDeliver } from "react-icons/gr";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";

import Filtter from "./component/Filtter/filtter";
import Cartitem from "./component/Cartitem/cartitem";
import Header from "./component/Header/Header";
import Navber from "./component/Navber/Navber";

const App = () => {
  const [opene, setOpene] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawere = () => {
    setOpene(true);
  };
  const onClose = () => {
    setOpene(false);
  };
  // const onChange = (e) => {
  //   setPlacement(e.target.value);
  // };
  return (
    <>
      <div>
        <div className="my-container">
          {/* <div className="d-flex justify-content-between my-3">
            <div className="gap-3 d-flex">
              <Button type="primary" onClick={showDrawere}>
                <GiHamburgerMenu />
              </Button>
              <GrDeliver size={32} color="blue" />
            </div>
            <div className="d-flex gap-3 ">
              <ImProfile size={32} color="blue" />
              <h5>Client Profile</h5>
            </div>
          </div> */}
          <Navber/>
{/* 
          <Drawer
            placement={placement}
            closable={false}
            open={opene}
            key={placement}
          >
            <div
              onClick={onClose}
              className="d-flex justify-content-end align-content-end "
            >
              <RxCross1 style={{ cursor: "pointer" }} />
            </div>
            <div style={{ padding: "23px 10px", width: "250px" }} className="">
              <div className="d-flex align-content-center py-4  ">
                <img
                  style={{ width: "48px", height: "48px", marginRight: "5px" }}
                  src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                  alt=""
                  className="rounded-circle"
                />
                <div>
                  <h5>Martha Uilson</h5>
                  <h6>Martha Uilson</h6>
                </div>
              </div>
              <div style={{ padding: "10px " }}>
                <TiHomeOutline size={32} color="orange" />
                <span style={{ margin: "0 0 0 15px" }}>Home</span>
              </div>

              <div style={{ padding: "10px" }}>
                <MdOutlineShoppingCart size={32} color="orange" />
                <span style={{ margin: "0 0 0 15px" }}>Booking Requests</span>
              </div>
              <div style={{ padding: "10px" }}>
                <GrDeliver size={32} color="orange" />
                <span style={{ margin: "0 0 0 15px" }}>Quote Requests</span>
              </div>
              <div style={{ padding: "10px" }}>
                <IoSettingsOutline size={32} color="orange" />
                <span style={{ margin: "0 0 0 15px" }}>Setting</span>
              </div>

              <div style={{ padding: "10px" }}>
                <IoLogOutOutline size={32} color="orange" />
                <span style={{ margin: "0 0 0 15px" }}>Logout</span>
              </div>
            </div>
          </Drawer> */}
          <div className="my-5 ">
            <Header />
            <div className=" d-flex ">
              <Filtter />
              <div style={{ width: "100%" }}>
                <div className="filter-btn my-3 border">
                  <h4>Cheaper </h4>
                  <h4>Faster</h4>
                  <h4>Featured</h4>
                </div>
                <Cartitem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

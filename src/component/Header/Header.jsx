import { Badge, Button, DatePicker, Drawer, Modal } from "antd";
import { CiSearch } from "react-icons/ci";
import { FaShip } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbSwitchHorizontal } from "react-icons/tb";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const onClose = () => {
    setOpen(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [size, setSize] = useState();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setSize("large");
    setOpen(!open);
  };
  return (
    <div className=" d-flex align-items-center justify-content-between p-2  container-border">
      <div className="d-flex flex-column  align-items-center justify-content-center p-2">
        <h5>Mode of Transportation</h5>
        <div className="d-flex align-content-center justify-content-center border-color rounded-circle flex-column  px-3 py-2  ">
          <FaShip size={30} color="blue" />
          <span className="text-center ">Sea</span>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center ">
        <div className="mx-3">
          <h5>Origin of Shipment</h5>
          <h6>Port of Nhava Sheva, India </h6>
        </div>
        <div>
          <TbSwitchHorizontal size={40} />
        </div>
        <div className="mx-3">
          <h5>Destination of Shipment</h5>
          <h6>Port of Shanghai, China </h6>
        </div>
      </div>
      <div className="d-flex justify-content-end ">
        <div className="px-3 ">
          <h5>Date of Loading</h5>
          <span>2021-07-14</span>
          <span className="date-hiden mx-3 ">
            <DatePicker renderExtraFooter={() => "extra footer"} showTime />
          </span>
        </div>
        <div className="d-flex justify-content-center align-content-center  px-3">
          <CiSearch
            size={50}
            style={{ cursor: "pointer" }}
            className=" mx-3 rounded-2  p-2 icon-border"
          />
          <div onClick={showDrawer} className="cart-number">
            <Badge count={1000} overflowCount={999}>
              <MdOutlineShoppingCart
                size={50}
                className="rounded-2 p-2 icon-border"
                style={{ cursor: "pointer" }}
              />
            </Badge>
            <Drawer
              open={open}
              className="ant-header"
              placement="right"
              size={size}
            >
              <div>
                <div className="d-flex justify-content-between align-content-center ">
                  <div>
                    <span className="icon-size" onClick={onClose}>
                      <IoIosArrowBack style={{cursor:"pointer"}} />
                    </span>
                    <span>Cart Details</span>
                  </div>
                  <Button type="primary" className="mx-3">
                    ODC
                  </Button>
                </div>

                <div className="d-flex justify-content-between ">
                  <div className="d-flex ">
                    <div style={{ width: "85%" }}>
                      <div className="d-flex gap-1">
                        <p>1</p>
                        <span>
                          <IoCloseCircle />
                        </span>
                        <p>Martsk | Container - 20' GP Standard</p>
                      </div>
                      <div
                        style={{ width: "150%" }}
                        className=" border rounded-5  border-dark py-2 px-4  "
                      >
                        <div className="">
                          <div className="">
                            <div className="">
                              <div
                                style={{ fontSize: "14px" }}
                                className="d-flex justify-content-between align-items-center mb-2"
                              >
                                <div>Nhava Sheva</div>
                                <div>19 days</div>
                                <div>Shanghai</div>
                              </div>
                              <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="step-circle"></div>
                                <div className="line"></div>
                                <div className="step-circle"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" ">
                    <div
                      className="d-flex flex-column  justify-content-center align-items-center  "
                      style={{ height: "100%" }}
                    >
                      <h6 style={{ fontSize: "12px" }} className="">
                        Container - 20' GP Standard
                      </h6>
                      <div className="d-flex flex-column  justify-content-center align-items-center  ">
                        <h6
                          style={{ fontSize: "12px", margin: "20px 0" }}
                          className=""
                        >
                          100$
                        </h6>
                        <div className="border d-flex ">
                          <span style={{cursor:"pointer"}} className="border py-1 px-3 ">+</span>
                          <span style={{cursor:"pointer"}} className="border py-1 px-3 ">1</span>
                          <span style={{cursor:"pointer"}} className="border py-1 px-3 ">- </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-content-center mt-5 ">
                  <Button onClick={showModal} type="primary" className="mx-3">
                    Proceed
                  </Button>
                  <Modal
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <div className="d-flex justify-content-center align-content-center flex-column text-center ">
                      <p>
                        Your Request Received Successfully! Reference Number
                      </p>
                      <h5>DT12346</h5>
                    </div>
                  </Modal>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

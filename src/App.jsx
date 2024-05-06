import { Button, DatePicker, Drawer, Radio, Space } from "antd";
import "./app.css";
import { FaShip } from "react-icons/fa";
import { TbSwitchHorizontal } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "antd/es/typography/Link";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";

const App = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [size, setSize] = useState();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setSize("large");
    setOpen(!open);
  };

  return (
    <>
      <div className="my-container d-flex align-items-center justify-content-between p-2  container-border">
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
            <CiSearch size={50} className=" mx-3 rounded-2  p-2 icon-border" />
            <div onClick={showDrawer} className="cart-number">
              <sup className="p-2 rounded-circle border ">8</sup>
              <MdOutlineShoppingCart
                size={50}
                className=" rounded-2  p-2 icon-border"
              />
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
                        <IoIosArrowBack />
                      </span>
                      <span>Cart Details</span>
                    </div>
                    <Button type="primary" className="mx-3">
                      ODC
                    </Button>
                  </div>

                  <div className="d-flex justify-content-between ">
                  <div className="d-flex ">
                    <span className="setmr">1.</span>
                    <div style={{width:"85%"}}>
                    <div className="d-flex gap-1">
              <p>1</p>
              <span>
                <IoCloseCircle />
              </span>
              <p>Martsk | Container - 20' GP Standard</p>
            </div>
                      <div style={{width:"150%"}} className=" border rounded-5  border-dark py-2 px-4  ">
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
                          <h6 style={{ fontSize: "12px",margin: "20px 0" }} className="">
                            100$
                          </h6>
                         <div className="border d-flex ">
                          <span className="border py-1 px-3 ">+</span>
                          <span className="border py-1 px-3 ">1</span>
                          <span className="border py-1 px-3 ">- </span>
                         </div>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
      <div className="my-container d-flex ">
        <div className=" aside-w">
          <div className="d-flex my-2 ">
            <h5>Try Our New Feature</h5>
            <Button type="primary" className="mx-3">
              ODC
            </Button>
          </div>

          <div className="filter-group border px-2 ">
            <header className="m-lg-3">
              <h6 className="">Type of Container</h6>
            </header>
            <div className="filter-content collapse show" id="collapse_1">
              <div className="card-body">
                <ul className="list-menu m-lg-3 ">
                  <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                      <Radio value={1}>
                        {" "}
                        <Link to="#">20 Reefer</Link>
                      </Radio>
                      <Radio value={2}>
                        <Link to="#">20' Open Top/FR (ODC) </Link>
                      </Radio>
                      <Radio value={3}>
                        <Link to="#">40' GP Standard </Link>
                      </Radio>
                      <Radio value={4}>
                        <Link to="#">40' HD Standard </Link>
                      </Radio>
                      <Radio value={5}>
                        <Link to="#">40' Open Top (IG) </Link>
                      </Radio>
                    </Space>
                  </Radio.Group>
                </ul>
              </div>
            </div>
          </div>
          <div className="filter-group border px-2 my-3">
            <header className="m-lg-3">
              <h6 className="">Brands </h6>
            </header>
            <div className="filter-content collapse show" id="collapse_2">
              <div className="card-body d-flex flex-column m-lg-3">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    defaultChecked=""
                    className="custom-control-input"
                  />
                  <span className="mx-2">Pick Up</span>
                </label>
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    defaultChecked=""
                    className="custom-control-input"
                  />
                  <span className="mx-2">Port of Origin</span>
                </label>
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    defaultChecked=""
                    className="custom-control-input"
                  />
                  <span className="mx-2">Ocean Freight</span>
                </label>
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    defaultChecked=""
                    className="custom-control-input"
                  />
                  <span className="mx-2">Port of Discharge</span>
                </label>
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    defaultChecked=""
                    className="custom-control-input"
                  />
                  <span className="mx-2">Delivery</span>
                </label>
              </div>
            </div>
          </div>
          <div className="filter-group border px-2 my-3">
            <header className="m-lg-3">
              <h6 className="">Shipping Line</h6>
            </header>
            <div className="filter-content collapse show" id="collapse_2">
              <div className="card-body d-flex flex-column m-lg-3">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    defaultChecked=""
                    className="custom-control-input"
                  />
                  <span className="mx-2">Pick Up</span>
                </label>
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    defaultChecked=""
                    className="custom-control-input"
                  />
                  <span className="mx-2">Port of Origin</span>
                </label>
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    defaultChecked=""
                    className="custom-control-input"
                  />
                  <span className="mx-2">Ocean Freight</span>
                </label>
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    defaultChecked=""
                    className="custom-control-input"
                  />
                  <span className="mx-2">Port of Discharge</span>
                </label>
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    defaultChecked=""
                    className="custom-control-input"
                  />
                  <span className="mx-2">Delivery</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div className="filter-btn my-3 border">
            <h4>Cheaper </h4>
            <h4 style={{ borderLeft: "1px", borderRight: "1px" }}>Faster</h4>
            <h4>Featured</h4>
          </div>

          <div className=" mt-4 gutter">
            <div className="d-flex gap-2">
              <p>1</p>
              <span>
                <IoCloseCircle />
              </span>
              <p>Martsk | Container - 20' GP Standard</p>
            </div>
            <div className="row border rounded border-dark ">
              <div className="p-4 col-lg-10">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-8">
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
              <div className="col-lg-2 cart-border ">
                <div
                  className="d-flex flex-column  justify-content-center align-items-center  "
                  style={{ height: "100%" }}
                >
                  <h6 style={{ fontSize: "12px" }} className="">
                    Valid Till - 31/03/2024
                  </h6>
                  <div className="d-flex flex-column  justify-content-center align-items-center rounded-5 px-3 border ">
                    <h6 style={{ fontSize: "12px" }} className="">
                      100$
                    </h6>
                    <BsCart3 />
                    <h6 style={{ fontSize: "10px" }} className="">
                      Valid Till - 31/03/2024
                    </h6>
                  </div>
                  <h6 style={{ fontSize: "12px", marginTop: "5px" }}>
                    View Details
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

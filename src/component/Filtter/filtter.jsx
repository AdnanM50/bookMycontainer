import { Button, Radio, Space } from "antd"
import Link from "antd/es/typography/Link";
import { useState } from "react";
import './filtter.css'

const Filtter = () => {
    const [value, setValue] = useState(1);
    const onChange1 = (e) => {
      console.log("radio checked", e.target.value);
      setValue(e.target.value);
    };
    
  return (
   
       <div className="aside-w">
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
                        <Radio.Group onChange={onChange1} value={value}>
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

  )
}

export default Filtter

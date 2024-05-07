import { BsCart3 } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";
import "./cartitem.css";

const Cartitem = () => {
  return (
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
            <h6 style={{ fontSize: "12px", marginTop: "5px" }}>View Details</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;

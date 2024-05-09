import { TiHomeOutline } from "react-icons/ti";
import Navber from "../Navber/Navber";
import "./dasbord.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import Header from "../Header/Header";
import Filtter from "../Filtter/filtter";
import Cartitem from "../Cartitem/cartitem";
const Dashbord = () => {
  return (
    <>
      <Navber />
     <div className="d-flex">
     <div className="my-container px-5 ">
        <div
          style={{ padding: "23px 10px", width: "250px" }}
          className="shadow-sm rounded-2 mt-5 "
        >
          <div className="d-flex align-content-center py-4  ">
            <img
              style={{ width: "48px", height: "48px", marginRight: "5px" }}
              src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
              alt=""
              className="rounded-circle"
            />
            <div>
              <h5 style={{ color: "#006838" }}>Martha Uilson</h5>
              <h6 style={{ color: "#909090", fontSize: "12px" }}>
                Martha Uilson
              </h6>
            </div>
          </div>
          <div style={{ padding: "10px " }}>
            <TiHomeOutline size={32} color="#909090" />
            <span style={{ margin: "0 0 0 15px", color: "#909090" }}>Home</span>
          </div>

          <div style={{ padding: "10px" }}>
            <MdOutlineShoppingCart size={32} color="#909090" />
            <span style={{ margin: "0 0 0 15px", color: "#909090" }}>
              Booking Requests
            </span>
          </div>
          <div style={{ padding: "10px" }}>
            <GrDeliver size={32} color="#909090" />
            <span style={{ margin: "0 0 0 15px", color: "#909090" }}>
              Quote Requests
            </span>
          </div>
          <div style={{ padding: "10px" }}>
            <IoSettingsOutline size={32} color="#909090" />
            <span style={{ margin: "0 0 0 15px", color: "#909090" }}>
              Setting
            </span>
          </div>

          <div style={{ padding: "10px" }}>
            <IoLogOutOutline size={32} color="#909090" />
            <span style={{ margin: "0 0 0 15px", color: "#909090" }}>
              Logout
            </span>
          </div>
        </div>
      </div>
      <div>
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
    </>
  );
};

export default Dashbord;

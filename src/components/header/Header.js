import React, { Component } from "react";
import "./header.css";
import { CiAlignLeft } from "react-icons/ci";
import { VscTriangleDown } from "react-icons/vsc";
import { Row, Col } from "react-bootstrap";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();
class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuTiket: "منو",
    };
    this.enterFunction = this.enterFunction.bind(this);
    this.leaveFunction = this.leaveFunction.bind(this);
  }
  enterFunction() {
    this.props.Enter();
    this.setState({ menuTiket: "اطلاعات فردی" });
  }
  leaveFunction() {
    this.props.Leave();
    this.setState({ menuTiket: "بروبه" });
  }
  EventHandler(event) {
    this.props.PassFunction();
  }

  render() {
    let ScrollCircle = null;

    if (window.scrollY < 500) {
      ScrollCircle = (
       <> <img
          className="ScrollImg"
          onMouseEnter={this.props.Enter} onMouseLeave={this.props.Leave}
          onClick={this.EventHandler.bind(this)}
          src="./download.svg"
          alt=""
        />
      
        </>
      );
    } else {
      ScrollCircle = null;
    }
    return (
      <>
        <div className="header">
          {/* <h1 onMouseEnter={this.enterFunction.bind(this)} onMouseLeave={this.leaveFunction.bind(this)}>hi there</h1> */}

          <div className="navbar">
            <button
              className="menu"
              onMouseEnter={this.enterFunction}
              onMouseLeave={this.leaveFunction}
            >
              <CiAlignLeft className="bar-icon" />
              <p className="menuTiket">{this.state.menuTiket}</p>
            </button>
            <div className="logo">
              AMIR.H
              <br />
              AHMADI
            </div>
          </div>

          <div className=" main-info">
            <div className="main-container">
              <img
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className="main-info-img"
                src="./amir.jpg"
                alt=""
              />

              <div
                className="title"
                dir="rtl"
                data-aos="fade-left"
                data-aos-offset="400"
                data-aos-delay="1000"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <p>
                  سلام غریبه!
                  <br /> ما یک آژانس طراحی خلاق مستقر در تهران هستیم. ما
                  ایده‌های شما را زنده می‌کنیم.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="scrollDown" > {ScrollCircle}</div>
      </>
    );
  }
}
export default Header;

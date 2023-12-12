import React from 'react';
import '../../assets/styles/Home.css';
import '../../assets/styles/Styles.css';
import { RiToolsLine } from "react-icons/ri";
import { BsHouseGear } from "react-icons/bs";
import { MdOutlineRoofing } from "react-icons/md";
import { BiStore } from "react-icons/bi";

const Header = ()=> {
  return (
    <section className="header">
      <div className="headerDivs">
        <div className="headerTitles">
          <div className="ht">
            <h1 className="title">
              Need a <span id="orange">local contractor</span> but don't know where to start or who to trust?
            </h1>
            <p className="htp">
              Get matched with a <span className="strong">top</span>, <span className="strong">pre-vetted local</span> contractor & schedule a <span className="strong">FREE estimate</span> in 30 seconds!
            </p>
          </div>
        </div>
        <div className="headerServices">
          <div className="hs">
            <p className="hsTitle">Select a service below to get started</p>
            <div className="squares">
              <div className="square">
                <div className="sqe">
                  <RiToolsLine className="iconHeader"/>
                  <br />
                  <span className="sauqreText">Replace roof</span>
                </div>
              </div>
              <div className="square">
                <div className="sqe">
                  <BsHouseGear className="iconHeader"/>
                  <br />
                  <span className="sauqreText">Repair roof</span>
                </div>
              </div>
              <div className="square">
                <div className="sqe">
                  <BiStore className="iconHeader"/>
                  <br />
                  <span className="sauqreText">Commercial</span>
                </div>
              </div>
              <div className="square">
                <div className="sqe">
                  <MdOutlineRoofing className="iconHeader"/>
                  <br />
                  <span className="sauqreText">Other</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;

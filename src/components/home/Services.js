import React from 'react';
import '../../styles/Home.css';
import { RiToolsLine } from "react-icons/ri";
import { BsFillDropletFill } from "react-icons/bs";
import { TbBuildingLighthouse } from "react-icons/tb";
import { LuSnowflake } from "react-icons/lu";
import { MdCleaningServices } from "react-icons/md";
import { FaLaptopHouse } from "react-icons/fa";

function Services() {
  return (
      <section className="services">
        <h2 className="h2Title">Services</h2>
        <div className="servicesItems">
          <div className="servicesItem">
            <RiToolsLine className="iconServices"/>
            <p className="servicesTitle">Roof Replacement</p>
          </div>
          <div className="servicesItem">
            <BsFillDropletFill className="iconServices"/>
            <p className="servicesTitle">Weather damage</p>
          </div>
          <div className="servicesItem">
            <TbBuildingLighthouse className="iconServices"/>
            <p className="servicesTitle">Gutters</p>
          </div>
          <div className="servicesItem">
            <LuSnowflake className="iconServices"/>
            <p className="servicesTitle">Ice & Snow Removal</p>
          </div>
          <div className="servicesItem">
            <MdCleaningServices className="iconServices"/>
            <p className="servicesTitle">Clean a Roof</p>
          </div>
          <div className="servicesItem">
            <FaLaptopHouse className="iconServices"/>
            <p className="servicesTitle">Shingle damage</p>
          </div>
        </div>
      </section>
    );
}

export default Services;

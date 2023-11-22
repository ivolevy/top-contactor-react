import React from 'react';
import '../../assets/styles/Home.css';
import { RiToolsLine } from "react-icons/ri";
import { BsFillDropletFill } from "react-icons/bs";
import { TbBuildingLighthouse } from "react-icons/tb";
import { LuSnowflake } from "react-icons/lu";
import { MdCleaningServices } from "react-icons/md";
import { FaLaptopHouse } from "react-icons/fa";

function Services() {
  const servicesData = [
    { icon: <RiToolsLine className="iconServices" />, title: 'Roof Replacement' },
    { icon: <BsFillDropletFill className="iconServices" />, title: 'Weather damage' },
    { icon: <TbBuildingLighthouse className="iconServices" />, title: 'Gutters' },
    { icon: <LuSnowflake className="iconServices" />, title: 'Ice & Snow Removal' },
    { icon: <MdCleaningServices className="iconServices" />, title: 'Clean a Roof' },
    { icon: <FaLaptopHouse className="iconServices" />, title: 'Shingle damage' },
  ];

  return (
    <section className="services">
      <h2 className="h2Title">Services</h2>
      <div className="servicesItems">
        {servicesData.map((service, index) => (
          <div className="servicesItem" key={index}>
            {service.icon}
            <p className="servicesTitle">{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

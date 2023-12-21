import React from 'react';
import '../../assets/styles/Contractors.css';
import '../../assets/styles/Styles.css';
import { PiChatCenteredTextFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { TbCoinFilled } from "react-icons/tb";

const steps = [
  {
    icon: <PiChatCenteredTextFill className="iconWork" />,
    title: 'STEP 1',
    text: 'Homeowners Request a Project Estimate From The "Top" Local Contractor',
    desc: 'Homeowners are pre-vetted with survey questions to ensure they are serious.',
  },
  {
    icon: <FaLocationDot className="iconWork" />,
    title: 'STEP 2',
    text: 'Homeowners are connected with local contractors',
    desc: 'We will match each homeowner with a top local contractor. Leads & booked appointments are sent to the top local contractor.',
  },
  {
    icon: <TbCoinFilled className="iconWork" />,
    title: 'STEP 3',
    text: 'Contractors get new customers & Increase revenue',
    desc: 'Contractors provide estimates for the homeowners to generate more new customers and revenue.',
  },
];

const Works = () => {
  return (
    <section className="worksContractors">
      <h2 className="h2TitleContractors">How Top Contractor List Works</h2>
      <div className="squaresWorksContractors">
        {steps.map(({ icon, title, text, desc }, index) => (
          <div className="squareWorkContractors" key={index}>
            {icon}
            <p className="squareTitle">{title}</p>
            <p className="squareText">{text}</p>
            <p className="SquareDesc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
